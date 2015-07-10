spaceFrontierApp.controller("trajectoryController", function($scope,$http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
    });

    $scope.trajectoryparts = [];
    $scope.init = function() { 
        $http.get('/parts/propulsion').then(function(result) { 
            $scope.trajectoryparts = result.data; 
        });
    } 
    $scope.init();

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        var inputspecifics, inputown = 0
        if($scope.inputoptionOne){
            var inputspecifics = $scope.inputtrajectorydV;
        }
        if($scope.inputoptionTwo) {
            var inputown = $scope.inputown;
        }
        var dV = inputown + inputspecifics;
        $scope.totaldV = dV;
        $scope.loading = false;
    }

    $(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});

    $scope.okdV = function(part) {
        return part.DeltaV >= $scope.totaldV;
    };

    $scope.okType = function(part) {
        var okType = false;
        if ($scope.Thruster && part.Type == 'Thruster')
        {
            okType = true;
        }
        if ($scope.Sail && part.Type == 'Sail')
        {
            okType = true;
        }
        return okType;
    };

    $scope.savePart = function(part) {
        $scope.selectedPart = part;
    }

    $scope.nextPage = function() {
        $http.put('/parts/cubesat-propulsion/' + idstring, $scope.selectedPart)
            .success(function(data) {
                $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            })
        var path = '/tool4?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool2?' + idstring;
        window.location = path; 
    };

});