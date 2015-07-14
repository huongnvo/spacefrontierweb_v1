spaceFrontierApp.controller("trajectoryController", function($scope,$http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;
    $scope.showDatabase = false;

    $scope.cubesat = [];
    $scope.updateData = function() {
        $http.get(cubesatPath).then(function(result) { 
            $scope.cubesat = result.data;
            var partextracted = {};
            partextracted = $scope.cubesat[0];

            $scope.target = partextracted['Target'];
            $scope.attitudePart = partextracted['Attitude'];
            $scope.antennaPart = partextracted['Antenna'];
            $scope.receiverPart = partextracted['Receiver'];
            $scope.cdhPart = partextracted['Cdh'];
            $scope.instrumentPart = partextracted['Instrument'];
            $scope.panelsPart = partextracted['Panels'];
            $scope.batteriesPart = partextracted['Batteries'];
            $scope.epsPart = partextracted['EPS'];
            $scope.propulsionPart = partextracted['Propulsion'];
            $scope.stationPart = partextracted['Station'];
            $scope.busPart = partextracted['Bus'];
            $scope.deployerPart = partextracted['Deployer'];
            $scope.thermalPart = partextracted['Thermal'];

        }); 
    };
    $scope.updateData();

    $scope.trajectoryparts = [];
    $scope.init = function() { 
        $http.get('/parts/propulsion').then(function(result) { 
            $scope.trajectoryparts = result.data; 
        });
    } 
    $scope.init();

    $scope.loading = false;
    $scope.myClick = function() {
        var inputspecifics, inputown = 0
        if($scope.inputoptionOne){
            var inputspecifics = $scope.inputtrajectorydV;
        }
        if($scope.inputoptionTwo) {
            var inputown = $scope.inputown;
        }
        var dV = inputown + inputspecifics;
        $scope.totaldV = dV;
        $scope.showDatabase = true;
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
    };

    $scope.addPart = function() {
        $http.put('/parts/cubesat-propulsion/' + idstring, $scope.selectedPart)
            .success(function(data) {
                $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            })
        $scope.updateData();
    };

    $scope.nextPage = function() {
       
        var path = '/tool4?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool2?' + idstring;
        window.location = path; 
    };

});