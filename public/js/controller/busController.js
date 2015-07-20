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
        return part.Volume == $scope.volume && part.Type == 'Cubesat Bus';
    };

    $scope.deployerType = function(part){
        return part.Volume == $scope.volume&&part.Type == 'Deployer';
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