///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby-list.less";
import NetworkService from "../../services/networkService.ts";

interface LobbyListScope extends ng.IScope {
    networkService: NetworkService;
    
    join: (l: lobby.LobbyListItem) => void;
}

export default class LobbyListCtrl {
    static $inject = ["$scope", "$timeout", "$location", "networkService"];

    constructor($scope: LobbyListScope, $timeout: ng.ITimeoutService, $location: ng.ILocationService, network: NetworkService) {
        if (!network.currentConnection) {
            $location.path("/loading");
            return;
        }
        
        $scope.networkService = network;
        $scope.join = lobby => {
            alert("Joining " + lobby.name);  
        };
        
        // Update view on network updates.
        network.on("lobbylist-add", () => $scope.$apply());
        network.on("lobbylist-update", () => $scope.$apply());
        network.on("lobbylist-remove", () => $scope.$apply());
    }
}