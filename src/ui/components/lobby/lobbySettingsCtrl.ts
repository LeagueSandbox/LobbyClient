///<reference path="../../_app.ts" />
'use strict';

import NetworkService from "../../services/networkService.ts";
import StaticService from "../../services/staticService.ts";
import ModalService from "../../services/modal/modalService.ts";

class SettingManager {
    settings: { [binding: string]: SettingWrapper };
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
        this.settings[setting.binding] = new SettingWrapper(this, setting, this.statics);
        this.redraw();
    }

    private handleSettingUpdate(setting: lobby.LobbySetting) {
        if (setting.value) {
            this.settings[setting.binding]._value = setting.value;
            delete setting.value;
        }
        
        Object.keys(this.settings).forEach(sk => this.settings[sk].validateValue());
        this.redraw();
    }

    private handleSettingRemove(setting: lobby.LobbySetting) {
        delete this.settings[setting.binding];
        this.redraw();
    }
}

/**
 * Setting types:
 * 
 * summonerSpellSelect:
 * - Default format: [<id of summoner spell 1>, <id of summoner spell 2>]
 * - Value format: [<id of summoner spell 1>, <id of summoner spell 2>]
 * - Options format: "*" OR "BINDING-NAME", where BINDING-NAME has a value in format { id: enabled }
 * 
 * championSelect:
 * - Default format: NONE
 * - Value format: <id of champion>
 * - Options format: "*" OR "BINDING-NAME", where BINDING-name has a value in format { id: enabled }
 * 
 * summonerSpellSelectMulti:
 * - Default format: NONE. Every spell is enabled by default.
 * - Value format: { <id-of-spell>: true/false }
 * - Options format: NONE. Every spell is an option.
 * 
 * championSelectMulti:
 * - Default format: NONE. Every champion is enabled by default.
 * - Value format: { <id-of-champion>: true/false }
 * - Options format: NONE. Every champion is an option.
 * 
 * mapSelect:
 * - Default format: <id of map>
 * - Value format: <id of map>
 * - Options format: NONE. Every map is an option.
 * 
 * select:
 * - Default format: <id (value) of option>
 * - Value format: <id (value) of option>
 * - Options format: [{ value: "ID", content: "Text" }, { value: "ID", content: "Text" }, etc]
 * 
 * text:
 * - Default format: "<contents>"
 * - Value format: "<contents>"
 * - Options format: -
 * 
 * checkbox:
 * - Default format: true/false
 * - Value format: true/false
 * - Options format: -
 */
class SettingWrapper {
    manager: SettingManager;
    setting: lobby.LobbySetting;
    statics: StaticService;

    _value: any;
    _options: any;

    constructor(man: SettingManager, setting: lobby.LobbySetting, statics: StaticService) {
        this.manager = man;
        this.setting = setting;
        this.statics = statics;

        this._options = this.computeOptions();
        this._value = setting.value || this.computeDefault();
        
        if (setting.value) {
            delete setting.value;
        }
    }

    // This invalidates the current value if
    // it suddenly is not valid anymore. Think of
    // someone picking a champion, but it becoming
    // disabled.
    validateValue() {
        this._options = this.computeOptions();

        if (this.setting.field === "summonerSpellSelect") {
            // This has one flaw: If there are less than 2 possible spells, we die.
            const opts = this._options;

            if (opts.indexOf(this._value[0]) === -1) {
                this._value = [opts[this._value[1] === opts[0] ? 1 : 0], this._value[1]];
            }

            if (opts.indexOf(this._value[1]) === -1) {
                this._value = [this._value[0], opts[this._value[0] === opts[0] ? 1 : 0]];
            }
        } else if (this.setting.field === "championSelect") {
            if (this._options.indexOf(this._value) === -1) {
                this._value = this.computeDefault();
            }
        } else if (this.setting.field === "select") {
            if (!this._options.filter(x => x.value === this._value).length) {
                this._value = this.computeDefault();
            }
        }

        // The rest of the types can never have their options
        // changed, thus their value never becomes invalid.
    }

    computeDefault(): any {
        if (this.setting.field === "summonerSpellSelect") {
            // Array of spells.
            return this.setting.default;
        } else if (this.setting.field === "championSelect") {
            // Champion object, but no champion is selected.
            return 0;
        } else if (this.setting.field === "summonerSpellSelectMulti") {
            // Default is everything enabled.
            return this._options.reduce((prev, now) => ((prev[now.id] = true), prev), {});
        } else if (this.setting.field === "championSelectMulti") {
            // Default is everything enabled.
            return this._options.reduce((prev, now) => ((prev[now.id] = true), prev), {});
        } else if (this.setting.field === "mapSelect") {
            // Id of selected map.
            return this.setting.default;
        } else if (this.setting.field === "select") {
            // Default is id (value) of option.
            return this.setting.default;
        } else if (this.setting.field === "text") {
            // Default is text content.
            return this.setting.default;
        } else if (this.setting.field === "checkbox") {
            // Default is true/false.
            return this.setting.default;
        }
    }

    computeOptions(): any {
        if (this.setting.field === "summonerSpellSelect") {
            if (this.setting.options === "*") {
                return this.statics.summonerSpells.map(x => x.id);
            }

            const options = this.manager.settings[<string>this.setting.options]._value;
            return Object.keys(options).filter(x => options[x]).map(x => +x);
        } else if (this.setting.field === "championSelect") {
            if (this.setting.options === "*") {
                return this.statics.champions.map(x => x.id);
            }

            const options = this.manager.settings[<string>this.setting.options]._value;
            return Object.keys(options).filter(x => options[x]).map(x => +x);
        } else if (this.setting.field === "summonerSpellSelectMulti") {
            // Every summoner spell is an option.
            return this.statics.summonerSpells;
        } else if (this.setting.field === "championSelectMulti") {
            // Every champion is an option.
            return this.statics.champions;
        } else if (this.setting.field === "mapSelect") {
            // Every map is an option.
            return this.statics.maps;
        }

        return this.setting.options;
    }

    get value() {
        return this._value;
    }

    set value(newValue: any) {
        this._value = newValue;
        this.notifyChange();
    }
    
    // This is for when our value changed, but we didn't catch it.
    // For example changing this.value[KEY] = value does not trigger
    // the above code, so we do it manually.
    notifyChange() {
        this.manager.network.setSetting(this.setting, this._value);
    }

    get field() {
        return this.setting.field;
    }

    get name() {
        return this.setting.name;
    }
}

export default class LobbySettingsCtrl {
    static $inject = ["$scope", "networkService", "staticService", "modalService"];

    settings: SettingManager;
    statics: StaticService;
    $scope: ng.IScope;
    modal: ModalService;

    constructor($scope: ng.IScope, network: NetworkService, statics: StaticService, modal: ModalService) {
        const redraw = () => {
            if (!$scope.$$phase) $scope.$apply();
        };

        this.statics = statics;
        this.modal = modal;
        this.$scope = $scope;

        this.settings = new SettingManager(network, statics, redraw);
        network.currentLobby.settings.forEach(s => this.settings.handleSettingAdd(s));
    }

    // TODO(molenzwiebel): This is quite ugly because we convert id -> champ.
    // Especially because we do exactly the reverse at the top.
    // Makes sending the value to the server a lot easier though. Hmm.
    openChampionPicker(setting: SettingWrapper) {
        const champs = this.statics.champions.filter(x => setting._options.indexOf(x.id) !== -1);
        const current = this.statics.champions.filter(x => x.id === setting.value)[0];

        this.modal.present<lobby.Champion>(require("../selectChampion/selectChampionView.html"), champs, current).then(c => {
            this.$scope.$apply(() => {
                setting.value = c.id;
            });
        });
    }

    // TODO(molenzwiebel): Note about champions is valid here as well.
    openSpellPicker(setting: SettingWrapper, index: number) {
        const spells = this.statics.summonerSpells.filter(x => setting._options.indexOf(x.id) !== -1);

        const current = this.statics.summonerSpells.filter(x => x.id === setting.value[index])[0];
        const other = this.statics.summonerSpells.filter(x => x.id === setting.value[(index + 1) % 2])[0];

        this.modal.present<lobby.SummonerSpell>(
            require("../selectSummonerSpell/selectSummonerSpellView.html"),
            spells,
            current,
            other
        ).then(c => {
            this.$scope.$apply(() => {
                // Update only the spell we changed.
                setting.value = [index == 0 ? c.id : setting.value[0], index == 1 ? c.id : setting.value[1]];
            });
        });
    }

    championById(id: number) {
        return this.statics.champions.filter(x => x.id === id)[0];
    }

    spellById(id: number) {
        return this.statics.summonerSpells.filter(x => x.id === id)[0];
    }

    mapById(id: number) {
        return this.statics.maps.filter(x => x.id === id)[0];
    }

    get playerSettings() {
        return Object.keys(this.settings.settings).map(x => this.settings.settings[x]).filter(x => !x.setting.host);
    }

    get hostSettings() {
        return Object.keys(this.settings.settings).map(x => this.settings.settings[x]).filter(x => x.setting.host);
    }
}