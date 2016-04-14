import "../../css/lobby.less";

export default class LobbyCtrl {
	constructor($scope, $location) {
		$scope.chatContent = require("./partials/chat.html");
		$scope.settingsContent = require("./partials/settings.html");
		$scope.playerListContent = require("./partials/playerList.html");

		$scope.back = () => {
			// FIXME: Back to lobby, not login.
			$location.path("/login");
		};

		$scope.champions = [
			{
				name: "Aatrox",
			},
			{
				name: "Ahri",
			},
			{
				name: "Annie",
			},
			{
				name: "Braum",
			},
			{
				name: "Zilean",
			},
			{
				name: "Illaoi",
			},
			{
				name: "Syndra",
			},
			{
				name: "Katarina",
			},
			{
				name: "Riven",
			},
			{
				name: "Yasuo",
			},
			{
				name: "Viktor",
			},
			{
				name: "Alistar",
			},
			{
				name: "Aatrox",
			},
			{
				name: "Ahri",
			},
			{
				name: "Annie",
			},
			{
				name: "Braum",
			},
			{
				name: "Zilean",
			},
			{
				name: "Illaoi",
			},
			{
				name: "Syndra",
			},
			{
				name: "Katarina",
			},
			{
				name: "Riven",
			},
			{
				name: "Yasuo",
			},
			{
				name: "Viktor",
			},
			{
				name: "Alistar",
			},
			{
				name: "Aatrox",
			},
			{
				name: "Ahri",
			},
			{
				name: "Annie",
			},
			{
				name: "Braum",
			},
			{
				name: "Zilean",
			},
			{
				name: "Illaoi",
			},
			{
				name: "Syndra",
			},
			{
				name: "Katarina",
			},
			{
				name: "Riven",
			},
			{
				name: "Yasuo",
			},
			{
				name: "Viktor",
			},
			{
				name: "Alistar",
			},
			{
				name: "Aatrox",
			},
			{
				name: "Ahri",
			},
			{
				name: "Annie",
			},
			{
				name: "Braum",
			},
			{
				name: "Zilean",
			},
			{
				name: "Illaoi",
			},
			{
				name: "Syndra",
			},
			{
				name: "Katarina",
			},
			{
				name: "Riven",
			},
			{
				name: "Yasuo",
			},
			{
				name: "Viktor",
			},
			{
				name: "Alistar",
			}
		];

		$scope.setActiveChamp = (x) => x.active = true;
	}
}
LobbyCtrl.$inject = ["$scope", "$location"];