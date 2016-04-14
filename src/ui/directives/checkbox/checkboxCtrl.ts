///<reference path="../../_app.ts" />
'use strict';

interface CheckboxScope extends ng.IScope {
    value: boolean;
    toggle: () => void;
}

export class CheckboxCtrl {
    static $inject = ["$scope"];

    scope: CheckboxScope;
    
    constructor($scope: ng.IScope) {
        this.scope = $scope as CheckboxScope;
        
        this.scope.toggle = () => {
            this.scope.value = !this.scope.value;
        };
    }
}

export const directive: ng.IDirectiveFactory = () => ({
	restrict: "E",
	template: require("./checkboxView.html"),
	controller: "checkboxCtrl",
	scope: { "value": "=" }
});