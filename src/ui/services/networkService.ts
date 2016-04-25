///<reference path="../_app.ts" />
'use strict';

import { EventEmitter } from "events";
const io: SocketIOClientStatic = require("socket.io-client");

export default class NetworkService extends EventEmitter {
    /**  Current lobby. May be null. */
    currentLobby: lobby.Lobby;
    /** Current Socket.IO connection to lobby. May be null. */
    currentLobbyConnection: SocketIOClient.Socket;
    
    /** List of all available lobbies. */
    lobbies: lobby.LobbyListItem[];   
    /** Current Socket.IO connection to central server. */
    currentConnection: SocketIOClient.Socket;
    
    constructor() {
        super();
        
        this.lobbies = [];
    }
    
    connectToCentral(url: string): Promise<void> {
        console.log("Connecting to " + url);
        return new Promise<void>((resolve, reject) => {
            this.currentConnection = io.connect(url);
            this.currentConnection.on("connect", () => {
                console.log("Connected.");
                resolve();
            });
            this.currentConnection.on("lobbylist-add", this.handleLobbyListAdd.bind(this));
            this.currentConnection.on("lobbylist-update", this.handleLobbyListUpdate.bind(this));
            this.currentConnection.on("lobbylist-remove", this.handleLobbyListRemove.bind(this));
        });
    }
    
    private getLobbyById(id: number): lobby.LobbyListItem {
        return this.lobbies.filter(x => x.id === id)[0];
    }
    
    private handleLobbyListAdd(contents: any) {
        if (this.getLobbyById(contents.id)) throw new Error("Lobby " + contents.id + " already exists.");
        
        const item: lobby.LobbyListItem = {
             id: contents.id,
             name: contents.name,
             creator: contents.creator,
             playerLimit: contents.playerLimit,
             playerCount: contents.playerCount,
             gamemodeName: contents.gameMode,
             hasPassword: contents.requirePassword,
             address: contents.address,
             port: contents.port
        };
  
        this.lobbies.push(item);
        this.emit("lobbylist-add", item);
    }
    
    private handleLobbyListUpdate(contents: any) {
        if (!this.getLobbyById(contents.id)) throw new Error("No lobby with id " + contents.id);
        
        const item = this.getLobbyById(contents.id);
        
        // Cast to any to silence assign not defined errors.
        // Assign diffs the 2 objects, assigning changed properties from contents to item.
        (<any>Object).assign(item, contents);
        
        this.emit("lobbylist-update", item);
    }
    
    private handleLobbyListRemove(contents: any) {
        if (!this.getLobbyById(contents.id)) throw new Error("No lobby with id " + contents.id);
    
        const item = this.getLobbyById(contents.id);
        this.lobbies.splice(this.lobbies.indexOf(item), 1);
        this.emit("lobbylist-remove", item);
    }
}