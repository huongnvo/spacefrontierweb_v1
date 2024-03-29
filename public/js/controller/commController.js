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
        var c = 299458792;

        $scope.showStation = true;
        $scope.showAntenna = true;
        $scope.showReceiver = true;
        $scope.showCalculation = true;

        if($scope.target=="Earth Low"){
            dist = 2000000;
        }
        else if($scope.target=='Earth Medium'){
            dist = 20200000;
        }
        else if($scope.target=='Earth High'){
            dist = 40000000;
        }
        else if($scope.target=='Moon'){
            dist = 384400000;
        }
        else if($scope.target=='Venus'){
            dist = 2.61*Math.pow(10,11);
        }
        else if($scope.target=='Mercury'){
            dist = 2.22*Math.pow(10,11);
        }
        else if($scope.target=='Mars'){
            dist = 4.01*Math.pow(10,11);
        }

        if($scope.frequency=="UHF"){
            frequency = 1.65*Math.pow(10,9);
        }
        else if($scope.frequency=="S-Band"){
            frequency = 3*Math.pow(10,9);
        }
        else if($scope.frequency=="X-Band"){
            frequency = 8.49*Math.pow(10,9);
        }
        else if($scope.frequency=="VHF"){
            frequency = 0.165*Math.pow(10,9);
        }
        
        $scope.spaceLoss = (20 * Math.log10(4 * Math.PI * dist * frequency / c)).toFixed(2);
        
        var eirp = 81.16;
        var stationGain = 35.94;
        var band = 1;
        var transmitPower=28.67;

        if($scope.receiverPart.Transmit_Power != 'Unknown'){
            transmitPower = parseFloat($scope.receiverPart.Transmit_Power);
        }
        if($scope.stationPart.EIRP_ave!='Unknown'){
            eirp = parseFloat($scope.stationPart.EIRP_ave);
        }
        if($scope.antennaPart.Gain!= 'Unknown'){
            gain = parseFloat($scope.antennaPart.Gain);
        }
        if ($scope.stationPart.Per_gain != 'Unknown') {
            stationGain = parseFloat($scope.stationPart.Per_gain);
        }

        var transmitterOutput = 19;
        var lambda = (c / frequency);
        var d = 0.5;
        var antennaGain = 20 * Math.log10(Math.PI * d / lambda);

        $scope.receiver = (transmitterOutput + antennaGain - parseFloat($scope.spaceLoss) + parseFloat(stationGain)).toFixed(2);
    
        var k = 1.3807 * Math.pow(10, -23);
        var T = 290;
        var noisePower = 10 * Math.log10(k * T * band * Math.pow(10, 6));
        $scope.sigNoise = ($scope.receiver - noisePower).toFixed(2);

        var EbN0 = 9.6;

        if($scope.frequency=="UHF"){
            $scope.bitRate = ((10 * Math.pow(10, 5) * Math.log2(1 + (Math.pow(10, (($scope.sigNoise - 33.3) / 10))))) / 1000).toFixed(2);        
        }
        else if($scope.frequency=="S-Band"){
            $scope.bitRate = ((10 * Math.pow(10, 4) * Math.log2(1 + (Math.pow(10, (($scope.sigNoise - 33.3) / 10))))) / 1000).toFixed(2);
        }
        else if($scope.frequency=="X-Band"){
            $scope.bitRate = ((10 * Math.pow(10, 4) * Math.log2(1 + (Math.pow(10, (($scope.sigNoise - 33.3) / 10))))) / 1000).toFixed(2);
        }
        else if($scope.frequency=="VHF"){
            $scope.bitRate = ((10 * Math.pow(10, 6) * Math.log2(1 + (Math.pow(10, (($scope.sigNoise - 33.3) / 10))))) / 1000).toFixed(2);
        }

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
      setTimeout(function(){
        $('[data-toggle="popover"]').popover('hide');
      }, 9000);
    });
});