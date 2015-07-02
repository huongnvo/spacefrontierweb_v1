spaceFrontierApp.controller("busController", function($scope, $http) {
    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $scope.parts = [];
    $scope.init = function() { 
		$http.get('http://localhost:3000/parts/thermal').then(function(result) { 
			$scope.parts = result.data; 
		});
    } 
    $scope.init(); 
});