spaceFrontierApp.controller("busController", function($scope, $http) {
    $scope.parts = [];
    $scope.init = function() { 
        $http.get('http://localhost:3000/parts/thermal').then(function(result) { 
            $scope.parts = result.data; 
        });
    } 
    $scope.init(); 

    $scope.getParts = function() {
        $http.get('http://localhost:3000/parts/thermal').then(function(result) {
            $scope.parts = result.data;
        });
    }


    $scope.loading = false;

    $scope.myClick = function() {
       $scope.loading = true;
       $scope.loading = false;
    }

    $scope.busType = function(part){
        
            return part.Volume==$scope.volume&&part.Type=='Cubesat Bus';
        
    }

    $scope.deployerType = function(part){
        return part.Type=='Deployer';
    }

    $scope.thermalType = function(part){
        return part.Type=='Active Thermal Control'||part.Type=='Passive Thermal Control';
    }
});