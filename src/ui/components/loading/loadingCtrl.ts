///<reference path="../../_app.ts" />
'use strict';

import "../../css/loading.less";
import CDNService from "../../services/cdnService.ts";
import StaticService from "../../services/staticService.ts";

import "bluebird";

export default class LoadingCtrl {
    static $inject = ["$scope", "$timeout", "$location", "cdnService", "staticService"];

    constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $location: ng.ILocationService, cdn: CDNService, stat: StaticService) {
        cdn.load()
            .then(() => stat.populate())
            .then(() => {
                $timeout(() => {
                    $location.path("/login");
                });
            });
    }
}