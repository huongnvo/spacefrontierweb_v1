
spaceFrontierApp.controller("summaryController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $scope.updateData = function() {
        $http.get(cubesatPath).then(function(result) { 
            $scope.cubesat = result.data;
            var partextracted = {};
            partextracted = $scope.cubesat[0];

            $scope.Name = partextracted['Mission_Name'];
            $scope.Objectives = partextracted['Mission_Objectives'];
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

    $scope.nameJson = [{
        Mission_Name: ""
    }];

    $scope.objectiveJson = [{
        Mission_Objectives: ""    
    }];


    $scope.nextPage = function() {
        var path = '/tool1?' + idstring;

        $scope.nameJson = [{
            Mission_Name: $scope.inputName
        }];

        $scope.objectiveJson = [{
            Mission_Objectives: $scope.inputObjective
        }];
       
        $http.put('/parts/cubesat-name/' + idstring, $scope.nameJson[0])
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
        $http.put('/parts/cubesat-objectives/' + idstring, $scope.objectiveJson[0])
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool?' + idstring;
        window.location = path; 
    };
});
