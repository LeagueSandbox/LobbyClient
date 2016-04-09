export default class SelectCtrl {
	constructor($scope) {
		$scope.options = [];
		$scope.expanded = false;

		$scope.placeholderText = $scope.placeholder;

		$scope.toggle = () => {
			$scope.placeholderText = $scope.placeholder;
			
			$scope.expanded = !$scope.expanded;
		};

		$scope.select = option => {
			$scope.value = option.value;
			$scope.placeholderText = option.content;

			$scope.expanded = false;
		};
	}
}

SelectCtrl.link = ($scope, element, attrs, ctrl, transclude) => {
	const children = [].slice.call(transclude()).filter(x => x.nodeName === "OPTION");
	
	children.forEach(option => {
		$scope.options.push({
			value: option.value,
			content: option.innerText
		});
	});
};

SelectCtrl.$inject = ["$scope"];