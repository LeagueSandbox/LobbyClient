///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby.less";
import ModalService from "../../services/modal/modalService.ts";
import CDNService from "../../services/cdnService.ts";
import { SummonerSpell } from "../selectSummonerSpell/selectSummonerSpellCtrl.ts";

interface LobbyScope extends ng.IScope {
    chatContent: string;
    settingsContent: string;
    playerListContent: string;
    shown: boolean;

    getBackground: () => string;
    getChampBackground: (skin: number) => string;
    
    openChampSelect: () => void;
    openSpellSelect: (number) => void;
    
    selectedChampion: dd.Champion;
    selectedSkin: number;
    summonerSpells: SummonerSpell[];
    
    settings: LocalSetting[];    
}

// Based on https://github.com/LeagueSandbox/LobbyServer/blob/master/README.md, might change later.
interface ConfigSetting {
    name: string;
    help: string;
    field: string;
    type: string;
    default: string;
    
    // Only when type == "select"
    options?: { value: string, content: string }[];
    binding?: string;
}

const CHARCODE_0 = "0".charCodeAt(0);
const CHARCODE_9 = "9".charCodeAt(0);
const CHARCODE_DOT = ".".charCodeAt(0);
const CHARCODE_MIN = "-".charCodeAt(0);

class LocalSetting {
    id: string;
    setting: ConfigSetting;
    value: any;
    
    constructor(setting: ConfigSetting) {
        this.setting = setting;
        this.value = setting.default;
        
        if (setting.binding) {
            this.id = setting.binding;
        } else {
            console.warn("Setting has no id.");
            this.id = "setting-" + Math.floor(Math.random() * 100000);
        }
    }
    
    validateInput(event: KeyboardEvent) {
        if (this.setting.type === "float") {
            if (event.charCode >= CHARCODE_0 && event.charCode <= CHARCODE_9) return;
            if (event.charCode === CHARCODE_DOT) return;
            if (event.charCode === CHARCODE_MIN) return;
            
            // Cancel invalid input.
            event.preventDefault();
        } else if (this.setting.type === "integer") {
            if (event.charCode >= CHARCODE_0 && event.charCode <= CHARCODE_9) return;
            if (event.charCode === CHARCODE_MIN) return;
            
            // Cancel invalid input.
            event.preventDefault();
        }
        
        return false;
    }
}

export default class LobbyCtrl {
    static $inject = ["$scope", "$location", "modalService", "cdnService"];

    constructor($scope: LobbyScope, $location: ng.ILocationService, modal: ModalService, cdn: CDNService) {
        $scope.chatContent = require("./partials/chat.html");
        $scope.settingsContent = require("./partials/settings.html");
        $scope.playerListContent = require("./partials/playerList.html");
        
        $scope.selectedSkin = 0;
        $scope.summonerSpells = [
            { name: "Heal", image: "http://imgur.com/Mxvky5Z.png", description: "Heals. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerHeal.png" },
            { name: "Flash", image: "http://imgur.com/oUKm1In.png", description: "Flashes. Rest of description here....", icon: "http://ddragon.leagueoflegends.com/cdn/5.21.1/img/spell/SummonerFlash.png" }
        ];
        
        // FIXME: Move this somewhere else.
        let champions: dd.Champion[];
        window.fetch("http://ddragon.leagueoflegends.com/cdn/4.20.1/data/en_GB/champion.json").then(r => {
            return r.json();
        }).then(json => {
            champions = Object.keys(json["data"]).map(x => json["data"][x]);
            $scope.$apply(() => $scope.selectedChampion = champions[1]);
        });
        
        $scope.settings = [
            new LocalSetting({ name: "Test", help: "", field: "checkbox", type: "boolean", default: "true" }),
            new LocalSetting({ name: "Test", help: "", field: "text", type: "float", default: "10" }),
            new LocalSetting({ name: "Test", help: "", field: "select", type: "integer", default: "true", options: [
                { value: "foo", content: "Foo" },
                { value: "bar", content: "Bar" }
            ] })
        ];
        
        $scope.getBackground = () => {
            return "http://i.imgur.com/Yt6ViUD.png";
        };
        
        $scope.getChampBackground = (skin = 0) => {
            if (!$scope.selectedChampion) {
                // FIXME: Black square or questionmark or something.
                return cdn.getPath("assets/storeImages/layout/g-background_generic.jpg");
            }
            return cdn.getPath("assets/images/champions/" + $scope.selectedChampion.id + "_Splash_Tile_" + skin + ".jpg");
        };
        
        $scope.openChampSelect = () => {
            modal.present<dd.Champion>(require("../selectChampion/selectChampionView.html"), champions, $scope.selectedChampion).then(c => {
                $scope.$apply(() => {
                    $scope.selectedChampion = c;
                    $scope.selectedSkin = 0;
                });
            });  
        };
        
        $scope.openSpellSelect = (idx) => {
            modal.present<SummonerSpell>(require("../selectSummonerSpell/selectSummonerSpellView.html"), $scope.summonerSpells[idx]).then(c => {
                $scope.$apply(() => {
                    $scope.summonerSpells[idx] = c;
                });
            });
        };
    }
}