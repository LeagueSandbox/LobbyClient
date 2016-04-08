import "../../css/login.css";

export default class LoginCtrl {
	constructor($scope, $timeout) {
		$scope.isLoading = false;

		$scope.login = () => {
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