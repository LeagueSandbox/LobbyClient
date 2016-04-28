///<reference path="../_app.ts" />
'use strict';

import { EventEmitter } from "events";
import NetworkService from "./networkService.ts";
import StaticService from "./staticService.ts";

export abstract class Setting<Deserialized, Serialized> {
    protected manager: SettingManager;
    
    /** Internal variable that keeps track of the local value of this setting. */
    private _value: Deserialized;
    /** Internal variable that keeps track of the potential options for this settiing. */
    private _options: any;
    /** LobbySetting that this setting represents. */
    protected setting: lobby.LobbySetting;
    
    /** Computes the options for this setting. */
    protected abstract computeOptions(): any;
    /** Computes the default value for this setting. */
    protected abstract computeDefault(): Deserialized;
    /** Converts the value from the server to our local representation. */
    protected abstract deserialize(value: Serialized): Deserialized;
    /** Converts our local value to a representation the server understands. */
    protected abstract serialize(value: Deserialized): Serialized;
    
    constructor(manager: SettingManager, setting: lobby.LobbySetting) {
        this.manager = manager;
        this.setting = setting;
        
        this._value = setting.value ? this.deserialize(setting.value) : this.computeDefault();
        
        if (setting.value) {
            delete setting.value;
        }
    }
    
    /** Updates this setting, potentially with a new value. */
    update(val?: Serialized) {
        if (val) {
            this._value = this.deserialize(val);
        }
        
        this._options = this.computeOptions();
    }
    
    /** Returns available options. */
    get options() {
        return this._options || (this._options = this.computeOptions());
    }
    
    /** Returns the current value. */
    get value(): Deserialized {
        return this._value;
    }
    
    /** Sets the current value and notifies the server of the change. */
    set value(newVal: Deserialized) {
        this._value = newVal;
        this.notifyChange();
    }
    
    /** Notifies the server that the current value has been changed. */
    /** This is used when the semantics of the value property change, but */
    /** not the actual value itself. E.g. this.value[foo] = bar. The value */
    /** does not update, but we still need to notify the server. */
    notifyChange() {
        this.manager.network.setSetting(this.setting, this.serialize(this._value));
    }
    
    /** Returns the type of the field. */
    get field() {
        return this.setting.field;
    }
    
    /** Returns the name of the field. */
    get name() {
        return this.setting.name;
    }
    
    /** If this is a host-only setting. */
    get host() {
        return this.setting.host;
    }
}

export class SummonerSpellSelectSetting extends Setting<[lobby.SummonerSpell, lobby.SummonerSpell], [number, number]> {
    protected computeDefault() {
        return this.deserialize(this.setting.default);
    }
    
    protected computeOptions() {
        if (this.setting.options === "*") {
            return this.manager.statics.summonerSpells;
        }
        
        return this.manager.settings[<string>this.setting.options].value;
    }
    
    protected deserialize(value: [number, number]): [lobby.SummonerSpell, lobby.SummonerSpell] {
        return [this.manager.statics.spellById(value[0]), this.manager.statics.spellById(value[1])];
    }
    
    protected serialize(value: [lobby.SummonerSpell, lobby.SummonerSpell]): [number, number] {
        return [value[0].id, value[1].id];
    }
}

export class ChampionSelectSetting extends Setting<lobby.Champion, number> {
    protected computeDefault() {
        return this.deserialize(this.setting.default);
    }
    
    protected computeOptions() {
        if (this.setting.options === "*") {
            return this.manager.statics.champions;
        }
        
        return this.manager.settings[<string>this.setting.options].value;
    }
    
    protected deserialize(value: number) {
        return this.manager.statics.championById(value);
    }
    
    protected serialize(value: lobby.Champion) {
        return value.id;
    }
}

export class SummonerSpellSelectMultiSetting extends Setting<lobby.SummonerSpell[], number[]> {
    protected computeDefault(): lobby.SummonerSpell[] {
        return this.manager.statics.summonerSpells;
    }
    
    protected computeOptions() {
        return this.manager.statics.summonerSpells;
    }
    
    protected deserialize(value: number[]) {
        return value.map(x => this.manager.statics.spellById(x));
    }
    
    protected serialize(value: lobby.SummonerSpell[]) {
        return value.map(x => x.id);
    }
}

export class ChampionSelectMultiSetting extends Setting<lobby.Champion[], number[]> {
    protected computeDefault() {
        return this.manager.statics.champions;
    }
    
    protected computeOptions() {
        return this.manager.statics.champions;
    }
    
    protected deserialize(value: number[]) {
        return value.map(x => this.manager.statics.championById(x));
    }
    
    protected serialize(value: lobby.Champion[]) {
        return value.map(x => x.id);
    }
}

export class MapSelectSetting extends Setting<lobby.Map, number> {
    protected computeDefault() {
        return this.deserialize(this.setting.default);
    }
    
    protected computeOptions() {
        return this.manager.statics.maps;
    }
    
    protected deserialize(value: number) {
        return this.manager.statics.mapById(value);
    }
    
    protected serialize(value: lobby.Map) {
        return value.id;
    }
}

export class SelectSetting extends Setting<string, string> {
    protected computeDefault() {
        return this.setting.default;
    }
    
    protected computeOptions() {
        return this.setting.options;
    }
    
    protected deserialize(value: string) {
        return value;
    }
    
    protected serialize(value: string) {
        return value;
    }
}

export class TextSetting extends Setting<string, string> {
    protected computeDefault() {
        return this.setting.default;
    }
    
    protected computeOptions() {
        // No options in a text setting.
        return [];
    }
    
    protected deserialize(value: string) {
        return value;
    }
    
    protected serialize(value: string) {
        return value;
    }
}

export class CheckboxSetting extends Setting<boolean, boolean> {
    protected computeDefault() {
        return this.setting.default;
    }
    
    protected computeOptions() {
        // No options in a text setting.
        return [];
    }
    
    protected deserialize(value: boolean) {
        return value;
    }
    
    protected serialize(value: boolean) {
        return value;
    }
}

function createSetting(setting: lobby.LobbySetting, man: SettingManager): Setting<any, any> {
    if (setting.field === "summonerSpellSelect") return new SummonerSpellSelectSetting(man, setting);
    if (setting.field === "championSelect") return new ChampionSelectSetting(man, setting);
    if (setting.field === "summonerSpellSelectMulti") return new SummonerSpellSelectMultiSetting(man, setting);
    if (setting.field === "championSelectMulti") return new ChampionSelectMultiSetting(man, setting);
    if (setting.field === "mapSelect") return new MapSelectSetting(man, setting);
    if (setting.field === "select") return new SelectSetting(man, setting);
    if (setting.field === "text") return new TextSetting(man, setting);
    if (setting.field === "checkbox") return new CheckboxSetting(man, setting);
    
    throw new Error("Unknown setting type " + setting.field);
}

class SettingManager {
    settings: { [binding: string]: Setting<any, any> };
    statics: StaticService;
    network: NetworkService;

    private redraw: () => void;

    constructor(network: NetworkService, statics: StaticService, redraw: () => void) {
        this.settings = {};
        this.statics = statics;
        this.redraw = redraw;
        this.network = network;

        network.on("setting-add", this.handleSettingAdd.bind(this));
        network.on("setting-update", this.handleSettingUpdate.bind(this));
        network.on("setting-remove", this.handleSettingRemove.bind(this));
    }

    handleSettingAdd(setting: lobby.LobbySetting) {
        this.settings[setting.binding] = createSetting(setting, this);
        this.redraw();
    }

    private handleSettingUpdate(setting: lobby.LobbySetting) {
        if (setting.value) {
            this.settings[setting.binding].update(setting.value);
            delete setting.value;
        }
        
        Object.keys(this.settings).forEach(sk => this.settings[sk].update());
        this.redraw();
    }

    private handleSettingRemove(setting: lobby.LobbySetting) {
        delete this.settings[setting.binding];
        this.redraw();
    }
}

export default class SettingService extends EventEmitter {
    static $inject = ["networkService", "staticService"];
    
    network: NetworkService;
    statics: StaticService;
    settings: SettingManager;
    
    constructor(net: NetworkService, stat: StaticService) {
        super();
        
        this.network = net;
        this.statics = stat;
        
        this.network.on("lobby-connect", () => this.setupSettings());
    }
    
    private setupSettings() {
        this.settings = new SettingManager(this.network, this.statics, () => this.emit("update"));
        this.network.currentLobby.settings.forEach(s => this.settings.handleSettingAdd(s));
    }
    
    get playerSettings() {
        return Object.keys(this.settings.settings).map(x => this.settings.settings[x]).filter(x => !x.host);
    }

    get hostSettings() {
        return Object.keys(this.settings.settings).map(x => this.settings.settings[x]).filter(x => x.host);
    }
}