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

    getChampBackground: (skin?: number) => string;
    
    selectSkin: (s: lobby.Skin) => void;
    openChampSelect: () => void;
    openSpellSelect: (number) => void;
    
    selectedChampion: lobby.Champion;
    selectedSkin: lobby.Skin;
    summonerSpells: lobby.SummonerSpell[];    
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
        
        $scope.getChampBackground = (s: number = 0) => {
            if (!$scope.selectedChampion) {
                return cdn.getPath("assets/storeImages/layout/g-background_generic.jpg");
            }
            return $scope.selectedChampion.skins[s].splashCutoutURL;
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
        
        $scope.selectSkin = s => {
            $scope.selectedSkin = s;
        };
    }
}