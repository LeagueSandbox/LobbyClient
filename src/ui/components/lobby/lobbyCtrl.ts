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

        $scope.champions = Array(...Array(30)).map((a, idx) => ({ name: ["Aatrox", "Annie", "Anivia", "Bard", "Brand", "Zilean", "Alistar"][idx % 7], active: false }));
    }
}