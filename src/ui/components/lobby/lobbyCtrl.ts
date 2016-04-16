///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby.less";
import ModalService from "../../services/modal/modalService.ts";
import CDNService from "../../services/cdnService.ts";

interface LobbyScope extends ng.IScope {
    chatContent: string;
    settingsContent: string;
    playerListContent: string;
    shown: boolean;

    back: () => void;
    settings: () => void;
    
    getBackground: () => string;
    
    openChampSelect: () => void;
    selectedChampion: dd.Champion;
}

export default class LobbyCtrl {
    static $inject = ["$scope", "$location", "modalService", "cdnService"];

    constructor($scope: LobbyScope, $location: ng.ILocationService, modal: ModalService, cdn: CDNService) {
        $scope.chatContent = require("./partials/chat.html");
        $scope.settingsContent = require("./partials/settings.html");
        $scope.playerListContent = require("./partials/playerList.html");
        
        // FIXME: Move this somewhere else.
        let champions: dd.Champion[];
        window.fetch("http://ddragon.leagueoflegends.com/cdn/4.20.1/data/en_GB/champion.json").then(r => {
            return r.json();
        }).then(json => {
            champions = Object.keys(json["data"]).map(x => json["data"][x]);
        });

        $scope.back = () => {
            $location.path("/login");
        };

        $scope.settings = () => {
            $location.path("/lobby/config");
        };
        
        $scope.getBackground = () => {
            if ($scope.selectedChampion) {
                return cdn.getPath("assets/images/champions/" + $scope.selectedChampion.id + "_Splash_Centered_0.jpg");
            }
            return "http://i.imgur.com/Yt6ViUD.png";
        };
        
        $scope.openChampSelect = () => {
            modal.present<dd.Champion>(require("../selectChampion/selectChampionView.html"), champions, $scope.selectedChampion).then(c => {
                $scope.$apply(() => $scope.selectedChampion = c);
            });  
        };
    }
}