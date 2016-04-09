import "../../css/login.less";

export default class LoginCtrl {
	constructor($scope, $timeout, $location) {
		$scope.isLoading = false;

		$scope.login = () => {
			if (!$scope.username || !$scope.password) return;
			$scope.isLoading = true;
			$scope.previousInvalid = false;

			$timeout(() => {
				$location.path("/lobby/config");
			}, 1000);
		};
	}
}
LoginCtrl.$inject = ["$scope", "$timeout", "$location"];