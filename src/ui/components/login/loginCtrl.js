import "../../css/login.less";

export default class LoginCtrl {
	constructor($scope, $timeout) {
		$scope.isLoading = false;

		$scope.login = () => {
			if (!$scope.username || !$scope.password) return;
			$scope.isLoading = true;
			$scope.previousInvalid = false;

			$timeout(() => {
				$scope.isLoading = false;
				$scope.previousInvalid = true;
			}, 1000);
		};
	}
}
LoginCtrl.$inject = ["$scope", "$timeout"];