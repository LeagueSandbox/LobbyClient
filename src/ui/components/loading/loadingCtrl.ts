///<reference path="../../_app.ts" />
'use strict';

import "../../css/loading.less";
import CDNService from "../../services/cdnService.ts";
import "bluebird";

export default class LoadingCtrl {
    static $inject = ["$scope", "$timeout", "$location", "cdnService"];

    constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $location: ng.ILocationService, cdn: CDNService) {
        Promise.all([cdn.load()]).then(() => {
            $timeout(() => {
                $location.path("/login");
            });
        });
    }
}