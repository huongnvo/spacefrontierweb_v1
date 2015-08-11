spaceFrontierApp.controller("busController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.showBus = true;
    $scope.showDeployer = false;
    $scope.showThermal = false;

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

            var totalVolume = 0;
            if ($scope.attitudePart.Volume == 'Unknown') {
                totalVolume += 0.75;
            } else {
                totalVolume += parseFloat($scope.attitudePart.Volume);
            }
            if ($scope.antennaPart.Volume == 'Unknown') {
                totalVolume += 0.1;
            } else {
                totalVolume += parseFloat($scope.antennaPart.Volume);
            }
            if ($scope.receiverPart.Name == $scope.attitudePart.Name) {
                totalVolume = totalVolume;
            } else if ($scope.receiverPart.Volume == 'Unknown') {
                totalVolume += 0.5;
            } else {
                totalVolume += parseFloat($scope.receiverPart.Volume);
            }
            if ($scope.cdhPart.Name == $scope.attitudePart.Name || $scope.cdhPart.Name == $scope.receiverPart.Name) {
                totalVolume = totalVolume;
            } else if ($scope.cdhPart.Volume == 'Unknown') {
                totalVolume += 0.75;
            } else {
                totalVolume += parseFloat($scope.cdhPart.Volume);
            }
            if ($scope.instrumentPart.Volume == 'Unknown') {
                totalVolume += 0.75;
            } else {
                totalVolume += parseFloat($scope.instrumentPart.Volume);
            }
            if ($scope.propulsionPart.Volume == 'Unknown' || parseFloat($scope.propulsionPart.Volume) < 1) {
                totalVolume += 2;
            } else {
                totalVolume += parseFloat($scope.propulsionPart.Volume);
            }
            if ($scope.epsPart.Name == $scope.attitudePart.Name || $scope.epsPart.Name == $scope.cdhPart.Name || $scope.epsPart.Name == $scope.receiverPart.Name) {
                totalVolume = totalVolume;
            } else if ($scope.epsPart.Volume == 'Unknown') {
                totalVolume += 0.5;
            } else {
                totalVolume += parseFloat($scope.epsPart.Volume);
            }
            totalVolume += 0.5;
            if (Math.floor(totalVolume) == 4 || Math.floor(totalVolume) == 5) {
                $scope.volume = 6; 
                $scope.message = "However, we have no part in our database of this volume, so we will use 6 U instead.";
            } else if (Math.floor(totalVolume) > 6) {
                $scope.volume = 6;
                $scope.message = "However, we have no part in our database of this volume, so we will use 6 U instead.";
            } else {
                $scope.volume = Math.floor(totalVolume);
                $scope.message = "We will round to " + $scope.volume + " U.";
            }
            $scope.volumeNoRound = totalVolume.toFixed(3);
        }); 
    };
    $scope.updateData();

    $scope.parts = [];
    $scope.init = function() { 
        $http.get('/parts/thermal').then(function(result) { 
            $scope.parts = result.data; 
        });
    }; 
    $scope.init(); 

    $scope.loading = false;

    $scope.myClick = function() {
       $scope.loading = true;
       $scope.loading = false;
    };

    $scope.busType = function(part){
        if(part.Volume!='Unknown'){
            return parseFloat(part.Volume) == $scope.volume && part.Type == 'Cubesat Bus';
        }
        return false;
    };

    $scope.deployerType = function(part){
        if(part.Volume!='Unknown'){
            return parseFloat(part.Volume) == $scope.volume && part.Type == 'Deployer';
        }
        return false;
    };

    $scope.thermalType = function(part){
        return (part.Type == 'Active Thermal Control' || part.Type == 'Passive Thermal Control');
    };

    $scope.saveBus = function(part) {
        $scope.selectedBus = part;
    };

    $scope.saveDeployer = function(part) {
        $scope.selectedDeployer = part;
    };

    $scope.saveThermal = function(part) {
        $scope.selectedThermal = part;
    };

    $scope.addBus = function() {
        $http.put('/parts/cubesat-bus/' + idstring, $scope.selectedBus)
            .success(function(data) {
                // $scope.selectedBus = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.addDeployer = function() {
        $http.put('/parts/cubesat-deployer/' + idstring, $scope.selectedDeployer)
            .success(function(data) {
                // $scope.selectedDeployer = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.addThermal = function() {
        $http.put('/parts/cubesat-thermal/' + idstring, $scope.selectedThermal)
            .success(function(data) {
                // $scope.selectedThermal = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.nextDep = function() {
        $scope.showBus = true;
        $scope.showDeployer = true;
        $scope.showThermal = false;
    };

    $scope.nextTherm = function() {
        $scope.showBus = true;
        $scope.showDeployer = true;
        $scope.showThermal = true;
    };

    $scope.nextPage = function() {
        var path = '/tool8?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool6?' + idstring;
        window.location = path; 
    };
});