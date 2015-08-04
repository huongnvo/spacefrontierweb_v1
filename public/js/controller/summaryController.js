
spaceFrontierApp.controller("summaryController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $scope.updateData = function() {
        $http.get(cubesatPath).then(function(result) { 
            $scope.cubesat = result.data;
            var partextracted = {};
            partextracted = $scope.cubesat[0];

            $scope.Mass = partextracted['Mass'];
            $scope.Power = partextracted['Power'];
            $scope.Volume = partextracted['Volume'];
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

    $scope.targetJson = [{
        Target: ""
    }];

    $scope.savePlanet = function(planet) {
        $scope.targetJson = [{
            Target: planet
        }];
    };

    $scope.nextTarget = function() {
        $scope.showTarget = true;
        $scope.showInstrumentation = false;
    };

    $scope.nextInstrumentation = function() {
        $scope.showTarget = true;
        $scope.showInstrumentation = true;
    };

    $scope.addTarget = function() {
        $http.put('/parts/cubesat-target/' + idstring, $scope.targetJson[0])
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.addName = function(){
        $scope.nameJson = [{
            Mission_Name: $scope.inputName
        }];
        $http.put('/parts/cubesat-name/' + idstring, $scope.nameJson[0])
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    }

    $scope.addObjectives = function(){
        
        $scope.objectiveJson = [{
            Mission_Objectives: $scope.inputObjective
        }];
        $http.put('/parts/cubesat-objectives/' + idstring, $scope.objectiveJson[0])
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    }

    $scope.nextPage = function() {
        var path = '/tool1?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        $http.delete(cubesatPath);
        var path = '/tool';
        window.location = path; 
    };
});
