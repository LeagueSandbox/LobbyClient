///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby.less";
import ModalService from "../../services/modal/modalService.ts";
import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkService from "../../services/networkService.ts";

interface LobbyScope extends ng.IScope {
    chatContent: string;
    settingsContent: string;
    playerListContent: string;

    getOrNone: (x?: string) => string;    
    network: NetworkService;  
}

export default class LobbyCtrl {
    static $inject = ["$scope", "$location", "modalService", "cdnService", "staticService", "networkService"];

    constructor($scope: LobbyScope, $location: ng.ILocationService, modal: ModalService, cdn: CDNService, stat: StaticService, network: NetworkService) {
        if (!network.currentLobby) {
            $location.path("/lobbies");
            return;
        }
        
        $scope.network = network;
        
        const update = () => $scope.$apply();
        
        network.on("teamlist-add", update);
        network.on("teamlist-update", update);
        network.on("teamlist-remove", update);
        network.on("playerlist-add", update);
        
        network.on("playerlist-update", update);
        network.on("playerlist-remove", update);
        
        $scope.chatContent = require("./partials/chat.html");
        $scope.settingsContent = require("./partials/settings.html");
        $scope.playerListContent = require("./partials/playerList.html");
               
        $scope.getOrNone = (x: string = cdn.getPath("assets/storeImages/layout/g-background_generic.jpg")) => x;
    }
}