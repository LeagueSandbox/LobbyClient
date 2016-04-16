///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby.less";

interface LobbyScope extends ng.IScope {
    chatContent: string;
    settingsContent: string;
    playerListContent: string;

    back: () => void;
    settings: () => void;
    champions: { name: string, active: boolean }[];
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

        $scope.champions = Array(...Array(30)).map((a, idx) => ({ name: ["Aatrox", "Annie", "Anivia", "Bard", "Brand", "Zilean", "Alistar"][idx % 7], active: false }));
    }
}