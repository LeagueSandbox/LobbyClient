///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby.less";
import ModalService from "../../services/modal/modalService.ts";
import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";

interface LobbyScope extends ng.IScope {
    chatContent: string;
    settingsContent: string;
    playerListContent: string;
    shown: boolean;

    getBackground: () => string;
    getChampBackground: () => string;
    
    openChampSelect: () => void;
    openSpellSelect: (number) => void;
    
    selectedChampion: lobby.Champion;
    selectedSkin: lobby.Skin;
    summonerSpells: lobby.SummonerSpell[];
    
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
    static $inject = ["$scope", "$location", "modalService", "cdnService", "staticService"];

    constructor($scope: LobbyScope, $location: ng.ILocationService, modal: ModalService, cdn: CDNService, stat: StaticService) {
        if (!stat.champions) {
            $location.path("/loading");
            return;
        }
        
        $scope.chatContent = require("./partials/chat.html");
        $scope.settingsContent = require("./partials/settings.html");
        $scope.playerListContent = require("./partials/playerList.html");
        
        $scope.selectedChampion = null;
        $scope.selectedSkin = null;
        $scope.summonerSpells = [stat.defaultSpell1, stat.defaultSpell2];
        
        $scope.settings = [
            new LocalSetting({ name: "Test", help: "", field: "checkbox", type: "boolean", default: "true" }),
            new LocalSetting({ name: "Test", help: "", field: "text", type: "float", default: "10" }),
            new LocalSetting({ name: "Test", help: "", field: "select", type: "integer", default: "true", options: [
                { value: "foo", content: "Foo" },
                { value: "bar", content: "Bar" }
            ] })
        ];
        
        $scope.getChampBackground = () => {
            if (!$scope.selectedChampion) {
                return cdn.getPath("assets/storeImages/layout/g-background_generic.jpg");
            }
            return $scope.selectedSkin.splashCutoutURL;
        };
        
        $scope.openChampSelect = () => {
            modal.present<lobby.Champion>(require("../selectChampion/selectChampionView.html"), stat.champions, $scope.selectedChampion).then(c => {
                $scope.$apply(() => {
                    $scope.selectedChampion = c;
                    $scope.selectedSkin = c.skins[0];
                });
            });  
        };
        
        $scope.openSpellSelect = (idx) => {
            modal.present<lobby.SummonerSpell>(
                require("../selectSummonerSpell/selectSummonerSpellView.html"),
                stat.summonerSpells,
                $scope.summonerSpells[idx],
                $scope.summonerSpells[idx === 0 ? 1 : 0]
                ).then(c => {
                $scope.$apply(() => {
                    $scope.summonerSpells[idx] = c;
                });
            });
        };
    }
}