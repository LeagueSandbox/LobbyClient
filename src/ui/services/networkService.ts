///<reference path="../_app.ts" />
'use strict';

import { EventEmitter } from "events";
import StaticService from "./staticService.ts";

const io: SocketIOClientStatic = require("socket.io-client");

interface KeyTransformMap {
    [key: string]: (string | ([string, (any, thiz?: any) => any]));
}

export default class NetworkService extends EventEmitter {
    static $inject = ["staticService"];

    /**  Current lobby. May be null. */
    currentLobby: lobby.Lobby;
    /** Current Socket.IO connection to lobby. May be null. */
    currentLobbyConnection: SocketIOClient.Socket;

    /** List of all available lobbies. */
    lobbies: lobby.LobbyListItem[];
    /** Current Socket.IO connection to central server. */
    currentConnection: SocketIOClient.Socket;

    /** StaticService instance. */
    static: StaticService;

    constructor(stat: StaticService) {
        super();

        this.lobbies = [];
        this.static = stat;
    }

    connectToCentral(url: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.currentConnection = io.connect(url, { reconnection: false });
            this.currentConnection.on("connect", resolve);

            const [add, update, remove] = this.buildListUpdater("lobbylist", this.lobbies, {
                id: "id",
                name: "name",
                creator: "creator",
                playerLimit: "playerLimit",
                playerCount: "playerCount",
                gamemodeName: "gameMode",
                hasPassword: "requirePassword",
                address: "address",
                port: "port"
            });

            this.currentConnection.on("lobbylist-add", add);
            this.currentConnection.on("lobbylist-update", update);
            this.currentConnection.on("lobbylist-remove", remove);
        });
    }

    /*
     * ======================================
     * ============= Lobby Lists ============
     * ======================================
     */
    public joinLobby(item: lobby.LobbyListItem, username = "Player", password?: string): Promise<any> {
        if (this.currentLobby || this.currentLobbyConnection) {
            throw new Error("Already connected to lobby.");
        }

        return new Promise((resolve, reject) => {
            this.currentLobbyConnection = io.connect(item.address + ":" + item.port, { reconnection: false });
            this.currentLobbyConnection.on("connect", () => {
                this.currentLobbyConnection.emit("lobby-connect", { name: username, password: password });
            });

            this.currentLobbyConnection.on("lobby-connect", (c) => this.handleLobbyConnect(c, resolve, reject));
            this.currentLobbyConnection.on("lobby-settings", this.handleLobbySettings.bind(this));
        });
    }
    /*
     * ======================================
     * =============== Lobby ================
     * ======================================
     */
    private handleLobbyConnect(contents: any, resolve: any, reject: any) {
        if (contents.ok) {
            this.currentLobby = {
                name: contents.name,
                creator: contents.creator,
                gamemodeName: contents.gameMode,
                teams: [],
                players: [],
                adminSettings: [],
                playerSettings: []
            };

            const [teamlistAdd, teamlistUpdate, teamlistRemove] = this.buildListUpdater("teamlist", this.currentLobby.teams, {
                id: "id",
                name: "name",
                color: "color",
                playerLimit: "playerLimit"
            });

            const [playerlistAdd, playerlistUpdate, playerlistRemove] = this.buildListUpdater("playerlist", this.currentLobby.players, {
                id: "id",
                name: "name",
                team: ["teamId", id => this.currentLobby.teams.filter(x => x.id === id)[0]],
                champion: ["championId", id => this.static.champions.filter(x => x.id === id)[0]],
                skin: ["skinIndex", (idx, thiz) => thiz.champion ? thiz.champion.skins[idx] : null],
                spellOne: ["spell1id", id => this.static.summonerSpells.filter(x => x.id === id)[0]],
                spellTwo: ["spell2id", id => this.static.summonerSpells.filter(x => x.id === id)[0]]
            });

            this.currentLobbyConnection.on("teamlist-add", teamlistAdd);
            this.currentLobbyConnection.on("teamlist-update", teamlistUpdate);
            this.currentLobbyConnection.on("teamlist-remove", teamlistRemove);

            this.currentLobbyConnection.on("playerlist-add", playerlistAdd);
            this.currentLobbyConnection.on("playerlist-update", playerlistUpdate);
            this.currentLobbyConnection.on("playerlist-remove", playerlistRemove);
            
            resolve(contents);
        } else {
            reject(contents);

            this.currentLobbyConnection.close();
            this.currentLobbyConnection = null;
        }
    }

    /**
     * Because the whole foo-add, foo-update and foo-remove structure is quite common
     * in the lobby protocol, I extracted most of the logic to this function, which is
     * a factory for listener functions. Just give it a name, a list which should store
     * the data and a KeyTransformMap which specifies how the incoming data should be
     * transformed to the local representation.
     */
    private buildListUpdater<L extends { id: number }>(evntName: string, list: L[], map: KeyTransformMap): [any, any, any] {
        function get(id): L {
            return list.filter(x => x.id === id)[0];
        }

        return [contents => { // add
            if (get(contents.id)) throw new Error(evntName + " with id " + contents.id + " already exists.");

            const res: L = <any>{};
            Object.keys(map).forEach(prop => {
                // Direct mapping.
                if (typeof map[prop] === "string") {
                    if (typeof contents[<string>map[prop]] === "undefined") throw new Error("Missing required property " + map[prop]);
                    res[prop] = contents[<string>map[prop]];
                } else {
                    const transform = <any>map[prop];
                    if (typeof contents[transform[0]] === "undefined") throw new Error("Missing required property " + transform[0]);
                    res[prop] = transform[1](contents[transform[0]], res);
                }
            });

            list.push(res);
            this.emit(evntName + "-add", res);
        }, contents => { // update
            if (!get(contents.id)) throw new Error("No " + evntName + " with id " + contents.id + ".");

            const item = get(contents.id);
            Object.keys(map).forEach(prop => {
                // Direct mapping.
                if (typeof map[prop] === "string") {
                    if (typeof contents[<string>map[prop]] === "undefined") return;
                    item[prop] = contents[<string>map[prop]];
                } else {
                    const transform = <any>map[prop];
                    if (typeof contents[transform[0]] === "undefined") return;
                    item[prop] = transform[1](contents[transform[0]], item);
                }
            });
            this.emit(evntName + "-update", item);
        }, contents => { // remove
            if (!get(contents.id)) throw new Error("No " + evntName + " with id " + contents.id + ".");

            const item = get(contents.id);
            list.splice(list.indexOf(item), 1);
            this.emit(evntName + "-remove", item);
        }];
    }

    private handleLobbySettings(contents: any) {
        this.currentLobby.gamemodeName = contents.gameMode;
        this.currentLobby.playerSettings = contents.playerSettings;
        this.currentLobby.adminSettings = contents.hostSettings;
    }
}