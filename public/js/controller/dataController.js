spaceFrontierApp.controller("dataController", function($scope, $http) {
    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

  	$scope.cdhparts = [];
    $scope.init = function() { 
		$http.get('/parts/cdh').then(function(result) { 
			$scope.cdhparts = result.data; 
		});
    } 
    $scope.init(); 
});