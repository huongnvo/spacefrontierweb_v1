spaceFrontierApp.controller("commController", function($scope, $http) {
    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $scope.commparts = [];
    $scope.stationparts = [];
    $scope.initcomm = function() { 
		$http.get('http://localhost:3000/parts/comm').then(function(result) { 
			$scope.commparts = result.data; 
		});
    };
    $scope.initstat = function() {
		$http.get('http://localhost:3000/parts/station').then(function(result) { 
			$scope.stationparts = result.data; 
		});
    };
    $scope.initcomm();
    $scope.initstat(); 
});