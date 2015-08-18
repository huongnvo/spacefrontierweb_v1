spaceFrontierApp.controller("loginController", function($scope, $http) {
	$scope.showInfo = false;

	$scope.logIn = function() {
		$scope.userForm = {
			email: $scope.email,
			password: $scope.password
		};
		$http.post('/authenticate', $scope.userForm)
		.then(function(result) {
			$scope.results = result.data;
			if (!$scope.results.success) {
				$scope.showInfo = true;
				$scope.password = '';
			} else if ($scope.results.success) {
				$scope.showInfo = false;
				$scope.email = '';
				$scope.password = '';

				var path = '/listAdmin?token=' + $scope.results.token;
				window.location = path;
			}
		});
	};
});