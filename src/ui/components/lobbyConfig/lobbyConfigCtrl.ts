///<reference path="../../_app.ts" />
'use strict';

import "../../css/lobby-config.less";

interface LobbyConfigScope extends ng.IScope {
    activeTabIndex: number;
    setActive: (number) => void;

    activeMap: number;
    setActiveMap: (number) => void;

    generalContent: string;
    championsContent: string;
    valuesContent: string;

    champions: { name: string, enabled: boolean }[];

    back: () => void;
}

export default class LobbyConfigCtrl {
    static $inject = ["$scope", "$location"];

    constructor($scope: LobbyConfigScope, $location: ng.ILocationService) {
        $scope.activeTabIndex = 0;
        $scope.setActive = idx => $scope.activeTabIndex = idx;

        $scope.activeMap = 0;
        $scope.setActiveMap = idx => $scope.activeMap = idx;

        $scope.champions = Array(...Array(30)).map((a, idx) => ({ name: ["Aatrox", "Annie", "Anivia", "Bard", "Brand", "Zilean", "Alistar"][idx % 7], enabled: true }));

        // We can also directly ng-include the html, instead of using require.
        // However, if we require we get hot reloading and we only need a single html in the built package.
        $scope.generalContent = require("./partials/generalView.html");
        $scope.championsContent = require("./partials/championsView.html");
        $scope.valuesContent = require("./partials/valuesView.html");

        console.dir($scope.generalContent);

        $scope.back = () => {
            // FIXME: Back to lobby, not login.
            $location.path("/lobby");
        };
    }
}