spaceFrontierApp.controller("commController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;
    $scope.showStation = false;
    $scope.showAntenna = false;
    $scope.showReceiver = false;
    $scope.showCalculation = false;

    $scope.parts = [];
    $scope.stations = [];
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

    $scope.init = function() { 
        $http.get('/parts/comm').then(function(result) { 
            $scope.parts = result.data; 
        });
         $http.get('/parts/station').then(function(result) { 
            $scope.stations = result.data; 
        });
    } 
    $scope.init(); 

    var dist=0;
    var frequency=0;

    $scope.myClick = function() {
        $scope.showStation = true;
        $scope.showAntenna = false;
        $scope.showReceiver = false;
        $scope.showCalculation = false;
    };

    $scope.nextAnt = function() {
        $scope.showStation = true;
        $scope.showAntenna = true;
        $scope.showReceiver = false;
        $scope.showCalculation = false;
    };

    $scope.nextRec = function() {
        $scope.showStation = true;
        $scope.showAntenna = true;
        $scope.showReceiver = true;
        $scope.showCalculation = false;
    };

    $scope.frequencySelected=function(){
        return $scope.frequency!=null;
    };

    $scope.calculate=function(){
        $scope.showStation = true;
        $scope.showAntenna = true;
        $scope.showReceiver = true;
        $scope.showCalculation = true;

        if($scope.target=="Earth Low"){
            dist=2000000;
        }
        else if($scope.target=='Earth Medium'){
            dist=20200000;
        }
        else if($scope.target=='Earth High'){
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
       

        if(parseFloat($scope.selectedStation.EIRP_ave)!==NaN){
            var check=parseFloat($scope.selectedStation.EIRP_ave)-parseFloat($scope.spaceLoss);
            if(check<0){
                $scope.receiver="warning!! negative receiver power: "+check;
            }else{
                $scope.receiver=""+check;
            }

        }else{
            $scope.receiver="not available for selected station";
        }
         
        var perGain=0;
        var perGainString=$scope.selectedStation.Per_gain;
        if(perGainString.indexOf(',')!==-1){
            perGain=parseFloat(perGainString.substring(0,perGainString.indexOf(',')));
        }else if(perGainString.indexOf("-")==-1){
            perGain = 0;
        }

        var sigNoise=parseFloat($scope.selectedAntenna.Gain)+parseFloat($scope.selectedReceiver.Transmit_Power+perGain)+228.6-parseFloat($scope.spaceLoss)-30;
        $scope.sigNoise=""+sigNoise;
        $scope.bitRate=""+Math.pow(10, ((sigNoise-10)/10))/1000;  

        $scope.selectedStation = {};    
        $scope.selectedAntenna = {}; 
        $scope.selectedReceiver = {};    
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

    $scope.addStation = function() {
        $http.put('/parts/cubesat-station/' + idstring, $scope.selectedStation)
            .success(function(data) {
                 // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.addAntenna = function() {
        $http.put('/parts/cubesat-antenna/' + idstring, $scope.selectedAntenna)
            .success(function(data) {
                 // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.addReceiver = function() {
        $http.put('/parts/cubesat-receiver/' + idstring, $scope.selectedReceiver)
            .success(function(data) {
                 // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.nextPage = function() {
        var path = '/tool5?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool3?' + idstring;
        window.location = path; 
    };
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
});