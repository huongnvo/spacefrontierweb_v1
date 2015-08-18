spaceFrontierApp.controller("signupController", function($scope, $http) {
	$scope.showInfo = false;

	$scope.signUp = function() {
		$scope.userForm = {
			name: $scope.name,
			email: $scope.email,
			affiliation: $scope.affiliation,
			title: $scope.title,
			password: $scope.password,
			admin: false
		};
		$http.post('/exists', $scope.userForm)
		.then(function(result) {
			var res = result.data;
			if (res.exists) {
				$scope.showInfo = true;
				// return res.status(403);
			} else {
				$scope.showInfo = false;
				$http.post('/users', $scope.userForm) 
				.then(function(result) {
					$http.post('/authenticate', $scope.userForm)
					.then(function(result) {
						$scope.name = '';
						$scope.email = '';
						$scope.affiliation = '';
						$scope.title = '';
						$scope.password = '';

						$scope.results = result.data;
						var path = '/listAdmin?token=' + $scope.results.token;
						$scope.path = path;
			    		window.location = path;    
					});
				});
			}
		});
	};
});