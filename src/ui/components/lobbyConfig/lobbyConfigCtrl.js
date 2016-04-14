import "../../css/lobby-config.less";

export default class LobbyConfigCtrl {
	constructor($scope, $location, $sce) {
		$scope.activeTabIndex = 0;
		$scope.setActive = idx => $scope.activeTabIndex = idx;

		$scope.activeMap = 0;
		$scope.setActiveMap = idx => $scope.activeMap = idx;
		
		$scope.champions = [
			{
				name: "Aatrox",
				enabled: true
			},
			{
				name: "Ahri",
				enabled: true
			},
			{
				name: "Annie",
				enabled: true
			},
			{
				name: "Braum",
				enabled: true
			},
			{
				name: "Zilean",
				enabled: true
			},
			{
				name: "Illaoi",
				enabled: true
			},
			{
				name: "Syndra",
				enabled: true
			},
			{
				name: "Katarina",
				enabled: true
			},
			{
				name: "Riven",
				enabled: true
			},
			{
				name: "Yasuo",
				enabled: true
			},
			{
				name: "Viktor",
				enabled: true
			},
			{
				name: "Alistar",
				enabled: true
			}
		];

		// We can also directly ng-include the html, instead of using require.
		// However, if we require we get hot reloading and we only need a single html in the built package.
		$scope.generalContent = $sce.trustAsHtml(require("./partials/generalView.html"));
		$scope.championsContent = $sce.trustAsHtml(require("./partials/championsView.html"));
		$scope.valuesContent = $sce.trustAsHtml(require("./partials/valuesView.html"));

		$scope.back = () => {
			// FIXME: Back to lobby, not login.
			$location.path("/login");
		};
	}
}
LobbyConfigCtrl.$inject = ["$scope", "$location", "$sce"];