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

    $scope.targetJson = [{
        Target: "Earth"
    }];

    $scope.savePlanet = function(planet) {
        $scope.targetJson = [{
            Target: planet
        }];
    };

    $scope.nextPage = function() {
        $http.put('/parts/cubesat-target/' + idstring, $scope.targetJson[0])
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            })
        var path = '/tool2?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        $http.delete(cubesatPath);
        window.location = '/tool';
    };
});