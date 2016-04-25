///<reference path="../../_app.ts" />
'use strict';

import "../../css/loading.less";
import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkService from "../../services/networkService.ts";

import "bluebird";

export default class LoadingCtrl {
    static $inject = ["$scope", "$timeout", "$location", "cdnService", "staticService", "networkService"];

    constructor($scope: ng.IScope,
        $timeout: ng.ITimeoutService,
        $location: ng.ILocationService,
        cdn: CDNService,
        stat: StaticService,
        network: NetworkService) {
            
        cdn.load()
            .then(() => stat.populate())
            .then(() => network.connectToCentral("http://localhost:8082"))
            .then(() => {
                $timeout(() => {
                    $location.path("/lobbies");
                });
            });
    }
}