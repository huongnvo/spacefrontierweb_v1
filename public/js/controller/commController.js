spaceFrontierApp.controller("commController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
        var partextracted = {};
        partextracted = $scope.cubesat[0];
        $scope.target = partextracted['Target'];
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

    $scope.saveStation = function(part) {
        $scope.selectedStation = part;
    };

    $scope.saveAntenna = function(part) {
        $scope.selectedAntenna = part;
    };

    $scope.saveReceiver = function(part) {
        $scope.selectedReceiver = part;
    };  

    $scope.nextPage = function() {
        $http.put('/parts/cubesat-station/' + idstring, $scope.selectedStation)
            .success(function(data) {
                $scope.selectedStation = {}; // clear the form so our user is ready to enter another
            });
        $http.put('/parts/cubesat-antenna/' + idstring, $scope.selectedAntenna)
            .success(function(data) {
                $scope.selectedAntenna = {}; // clear the form so our user is ready to enter another
            });
        $http.put('/parts/cubesat-receiver/' + idstring, $scope.selectedReceiver)
            .success(function(data) {
                $scope.selectedReceiver = {}; // clear the form so our user is ready to enter another
            });
        var path = '/tool5?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool3?' + idstring;
        window.location = path; 
    };
});