///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby.less";

interface LobbyScope extends ng.IScope {
    chatContent: string;
    settingsContent: string;
    playerListContent: string;
    shown: boolean;

    back: () => void;
    settings: () => void;
    
    getBackground: () => string;
    
    champions: { name: string }[];
    selectedChampion: { name: string };
    setActive: (any) => void;
}

export default class LobbyCtrl {
    static $inject = ["$scope", "$location"];

    constructor($scope: LobbyScope, $location: ng.ILocationService) {
        $scope.chatContent = require("./partials/chat.html");
        $scope.settingsContent = require("./partials/settings.html");
        $scope.playerListContent = require("./partials/playerList.html");

        $scope.back = () => {
            $location.path("/login");
        };

        $scope.settings = () => {
            $location.path("/lobby/config");
        };
        
        /*const oldMouseMove = document.onmousemove;
        document.onmousemove = (event) => {
            const bg = document.getElementById("lobby-background");
            
            const { pageX, pageY } = event;
            const { innerWidth, innerHeight } = window;
            const diffX = pageX - innerWidth / 2;
            const diffY = pageY - innerHeight / 2;
            
            bg.style.backgroundPositionX = "calc(50% - " + Math.floor(diffX / innerWidth * 30) + "px)";
            bg.style.backgroundPositionY = "calc(50% - " + Math.floor(diffY / innerHeight * 30) + "px)";
            oldMouseMove && oldMouseMove(event);  
        };*/
        
        $scope.getBackground = () => {
            if ($scope.selectedChampion) {
                return "http://l3cdn.riotgames.com/releases/live/projects/lol_air_client/releases/0.0.1.186/files/assets/images/champions/" + $scope.selectedChampion.name + "_Splash_Centered_0.jpg";
            }
            return "http://i.imgur.com/Yt6ViUD.png";
        };

        $scope.champions = Array(...Array(30)).map((a, idx) => ({ name: ["Aatrox", "Annie", "Anivia", "Bard", "Brand", "Zilean", "Alistar"][idx % 7] }));
        $scope.setActive = a => ($scope.selectedChampion = a) && ($scope.shown = false);
    }
}