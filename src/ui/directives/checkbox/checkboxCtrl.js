export default class CheckboxCtrl {
	constructor($scope) {
		$scope.toggle = () => {
			$scope.value = !$scope.value;
		};
	}
}

CheckboxCtrl.$inject = ["$scope"];