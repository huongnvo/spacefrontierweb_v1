spaceFrontierApp.controller("instrumentsController", function($scope, $http, $location) {
    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    };

    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
    });

    $scope.instruments = [];
    $scope.init = function() { 
		$http.get('/parts/instruments').then(function(result) { 
			$scope.instruments = result.data; 
		});
    };
    $scope.init();

    $scope.nextPage = function() {
        var path = '/tool2?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        $http.delete(cubesatPath);
        window.location = '/tool';
    };
});