export default class SelectCtrl {
	constructor($scope) {
		$scope.expanded = false;

		$scope.toggle = () => {
			$scope.expanded = !$scope.expanded;
		};
	}
}
SelectCtrl.$inject = ["$scope"];