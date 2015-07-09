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

    $scope.nextPage = function() {
        var path = '/tool8?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool6?' + idstring;
        window.location = path; 
    };
});