(function () {
	"use strict";
	angular
		.module("LunchCheck", [])
		.controller("LunchCheckController", LunchCheckController);
	LunchCheckController.$inject = ["$scope"];
	function LunchCheckController($scope) {
		$scope.title = "Lunch Checker";
		$scope.clicked = "";
		$scope.buttonLable = "Check If Too Much";
		$scope.size = 0;
		$scope.warning =
			"We do NOT consider and empty item, i.e., ', ,' as an item towards to the count";

		$scope.textValue = "";
		$scope.clickButton = () => {
			$scope.inputArray = $scope.textValue.split(",");
			$scope.inputArray = $scope.inputArray.filter((el) => {
				el = el.trim();
				return el !== "";
			});
			$scope.size = $scope.inputArray.length;
			if ($scope.size !== 0 && $scope.size <= 3) {
				$scope.clicked = "Enjoy!";
			} else if ($scope.size > 3) {
				$scope.clicked = "Too much!";
			} else {
				$scope.clicked = "Please enter data first";
			}
		};
	}
})();
