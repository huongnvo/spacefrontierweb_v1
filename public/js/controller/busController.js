spaceFrontierApp.controller("busController", function($scope, $http) {
    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $scope.parts = [];
    $scope.init = function() { 
		$http.get('/parts/thermal').then(function(result) { 
			$scope.parts = result.data; 
		});
    } 
    $scope.init(); 
});