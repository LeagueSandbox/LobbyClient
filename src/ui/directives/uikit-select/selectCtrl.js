export default class SelectCtrl {
	constructor($scope) {
		$scope.options = [];
		$scope.expanded = false;

		$scope.placeholderText = $scope.placeholder;

		let selected;
		$scope.toggle = () => {
			if ($scope.disabled) return;

			$scope.placeholderText = $scope.expanded && selected ? selected.content : $scope.placeholder;
			$scope.expanded = !$scope.expanded;
		};

		$scope.select = option => {
			selected = option;

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