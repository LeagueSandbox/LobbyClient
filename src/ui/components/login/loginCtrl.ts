///<reference path="../../_app.ts" />
'use strict';

import "../../css/login.less";

interface LoginScope extends ng.IScope {
    isLoading: boolean;
    previousInvalid: boolean;

    username: string;
    password: string;

    login: () => void;
}

export default class LoginCtrl {
    static $inject = ["$scope", "$timeout", "$location"];

    constructor($scope: LoginScope, $timeout: ng.ITimeoutService, $location: ng.ILocationService) {
        $scope.isLoading = false;

        $scope.login = () => {
            if (!$scope.username || !$scope.password) return;
            $scope.isLoading = true;
            $scope.previousInvalid = false;

            $timeout(() => {
                $location.path("/lobby");
            }, 1000);
        };
    }
}