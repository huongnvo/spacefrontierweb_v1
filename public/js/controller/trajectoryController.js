spaceFrontierApp.controller("trajectoryController", function($scope, $http) {
    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})

    $scope.parts = [];
    $scope.init = function() { 
        $http.get('http://localhost:3000/parts/propulsion').then(function(result) { 
            $scope.parts = result.data; 
        });
    } 
    $scope.init(); 
});