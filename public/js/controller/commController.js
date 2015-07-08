spaceFrontierApp.controller("commController", function($scope, $http) {
     $scope.parts = [];
     $scope.stations = [];

    $scope.init = function() { 
        $http.get('http://localhost:3000/parts/comm').then(function(result) { 
            $scope.parts = result.data; 
        });
         $http.get('http://localhost:3000/parts/station').then(function(result) { 
            $scope.stations = result.data; 
        });
    } 
    $scope.init(); 

    $scope.getParts = function() {
        $http.get('http://localhost:3000/parts/comm').then(function(result) { 
            $scope.parts = result.data; 
        });
         $http.get('http://localhost:3000/parts/station').then(function(result) { 
            $scope.stations = result.data; 
        });
    } 

    $scope.frequencyFilter=function(part){

            return part.Frequency.indexOf($scope.frequency)!==-1;
       
    }

    $scope.radioFilter=function(part){
        return part.Type=='Transmitter'||part.Type=='Transceiver';
    }

    $scope.antennaFilter=function(part){
        return part.Type=='Low-Gain Antenna'||part.Type=='High-Gain Antenna';
    }

    $scope.stationFilter=function(part){
        return part.Band.indexOf($scope.frequency)!==-1;
    }
});