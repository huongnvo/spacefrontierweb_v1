spaceFrontierApp.controller("busController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
    });

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
        return part.Type == 'Deployer';
    };

    $scope.thermalType = function(part){
        return part.Type == 'Active Thermal Control' || part.Type == 'Passive Thermal Control';
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

    $scope.nextPage = function() {
        $http.put('/parts/cubesat-bus/' + idstring, $scope.selectedBus)
            .success(function(data) {
                $scope.selectedBus = {}; // clear the form so our user is ready to enter another
            });
        $http.put('/parts/cubesat-deployer/' + idstring, $scope.selectedDeployer)
            .success(function(data) {
                $scope.selectedDeployer = {}; // clear the form so our user is ready to enter another
            });
        $http.put('/parts/cubesat-thermal/' + idstring, $scope.selectedThermal)
            .success(function(data) {
                $scope.selectedThermal = {}; // clear the form so our user is ready to enter another
            });
        var path = '/tool8?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool6?' + idstring;
        window.location = path; 
    };
});