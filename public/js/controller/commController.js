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
    $scope.poop='poop';
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

    var dist=0;
    var frequency=0;

    $scope.loading=false;
    $scope.myClick=function(){
        $scope.loading = true;
        if($scope.target=="Earth_Low"){
            dist=2000000;
        }
        else if($scope.target=='Earth_Medium'){
            dist=20200000;
        }
        else if($scope.target=='High'){
            dist=40000000;
        }
        else if($scope.target=='Moon'){
            dist=384400000;
        }else if($scope.target=='Venus'){
            dist=2.61*Math.pow(10,11);
        }else if($scope.target=='Mercury'){
            dist=2.22*Math.pow(10,11);
        }else if($scope.target=='Mars'){
            dist=4.01*Math.pow(10,11);
        }

        if($scope.frequency=="UHF"){
            frequency=1.65*Math.pow(10,9);
        }else if($scope.frequency=="S-Band"){
            frequency=3*Math.pow(10,9);
        }else if($scope.frequency=="X-Band"){
            frequency=10*Math.pow(10,9);
        }else if($scope.frequency=="VHF"){
            frequency=0.165*Math.pow(10,9);
        }
        $scope.spaceLoss=10*Math.log10(Math.pow((4*Math.PI*dist*frequency/300000000),2));
       
        if($scope.selectedStation.EIRP_ave!=='-'){
            $scope.receiver=""+parseInt($scope.selectedStation.EIRP_ave)-parseInt($scope.spaceLoss);
        }else{
            scope.receiver=$scope.selectedStation.EIRP_ave;
        }
        
        
        var perGain=0;
        var perGainString=$scope.selectedStation.Per_gain;
        if(perGainString.indexOf(',')!==-1){
            perGain=parseInt(perGainString.substring(0,perGainString.indexOf(',')));
        }else if(perGainString.indexOf("-")==-1){
            perGain = parseInt(perGainString);
        }

        var sigNoise=$scope.selectedAntenna.Gain+$scope.selectedReceiver.Transmit_Power+perGain+228.6-parseInt($scope.spaceLoss)-30;
        $scope.sigNoise=""+sigNoise;
        $scope.bitRate=""+Math.pow(10, ((sigNoise-10)/10))/1000;   
      
        $scope.loading=false;
        
    }
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