///<reference path="../../_app.ts" />
'use strict';

import "../../css/loading.less";
import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";
import NetworkService from "../../services/networkService.ts";
import SettingService from "../../services/settingService.ts";

import "bluebird";

export default class LoadingCtrl {
    static $inject = ["$scope", "$timeout", "$location", "cdnService", "staticService", "networkService", "settingService"];

    constructor($scope: ng.IScope,
        $timeout: ng.ITimeoutService,
        $location: ng.ILocationService,
        cdn: CDNService,
        stat: StaticService,
        network: NetworkService,
        settings: SettingService) {
            
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