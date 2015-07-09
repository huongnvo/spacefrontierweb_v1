spaceFrontierApp.controller("commController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
    });
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
        $http.get('/parts/comm').then(function(result) { 
            $scope.parts = result.data; 
        });
         $http.get('/parts/station').then(function(result) { 
            $scope.stations = result.data; 
        });
    }; 

    $scope.frequencyFilter = function(part) {
        return part.Frequency.indexOf($scope.frequency) !== -1;
       
    };

    $scope.radioFilter = function(part) {
        return part.Type == 'Transmitter' || part.Type == 'Transceiver';
    };

    $scope.antennaFilter = function(part) {
        return part.Type == 'Low-Gain Antenna' || part.Type == 'High-Gain Antenna';
    };

    $scope.stationFilter = function(part){
        return part.Band.indexOf($scope.frequency) !== -1;
    };

    $scope.nextPage = function() {
        var path = '/tool5?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool3?' + idstring;
        window.location = path; 
    };
});