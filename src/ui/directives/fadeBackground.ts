///<reference path="../_app.ts" />
'use strict';

interface FadeBackgroundScope extends ng.IScope {
    background1: string;
    background2: string;
    
    background: string;
    clazz: string;

    // True if element 1 is currently shown. False if element 2 is active.
    flag: boolean;
}

export class FadeBackgroundCtrl {
    static $inject = ["$scope"];
    scope: FadeBackgroundScope;

    constructor($scope: FadeBackgroundScope) {
        $scope.flag = true;
        $scope.background1 = $scope.background;
        
        $scope.$watch("background", (nVal: string) => {
            if ($scope.flag) {
                $scope.background2 = nVal;
            } else {
                $scope.background1 = nVal;
            }
            
            $scope.flag = !$scope.flag;
        });
    }
}

const TEMPLATE = `
<div class="backdrop" ng-class="clazz"></div>
<div class="image1 {{ clazz }}"
    ng-show="flag"
    ng-class="{ 'fade-in': flag, 'fade-out': !flag }"
    background-src="{{ background1 }}"></div>
<div class="image2 {{ clazz }}"
    ng-show="!flag"
    ng-class="{ 'fade-in': !flag, 'fade-out': flag }"
    background-src="{{ background2 }}"></div>
`;

export const directive: ng.IDirectiveFactory = () => ({
    restrict: "E",
    template: TEMPLATE,
    controller: "fadeBackgroundCtrl",
    scope: { "clazz": "@", "background": "@" }
});