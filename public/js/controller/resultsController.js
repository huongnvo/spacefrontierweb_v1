spaceFrontierApp.controller("resultsController", function($scope, $http) {
	var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $scope.updateData = function() {
        $http.get(cubesatPath).then(function(result) { 
            $scope.cubesat = result.data;
            var partextracted = {};
            partextracted = $scope.cubesat[0];

            $scope.Name = partextracted['Mission_Name'];
            $scope.Objectives = partextracted['Mission_Objectives'];
            $scope.target = partextracted['Target'];
    	    $scope.attitude = partextracted['Attitude'];
    	    $scope.antenna = partextracted['Antenna'];
    	    $scope.receiver = partextracted['Receiver'];
    		$scope.cdh = partextracted['Cdh'];
    	    $scope.instrument = partextracted['Instrument'];
    	    $scope.panels = partextracted['Panels'];
    	    $scope.batteries = partextracted['Batteries'];
    	    $scope.eps = partextracted['EPS'];
    	    $scope.propulsion = partextracted['Propulsion'];
    	    $scope.station = partextracted['Station'];
    	    $scope.bus = partextracted['Bus'];
    	    $scope.deployer = partextracted['Deployer'];
    	    $scope.thermal = partextracted['Thermal'];

            var totalMassDeployer = 0;
            var totalMass = 0;
            var totalPower = 0;
            var totalVolume = 0;

            if ($scope.instrument.Mass == 'Unknown' || parseFloat($scope.instrument.Volume) < 0.2) {
                totalMass += 1000;
            } else {
                totalMass += parseFloat($scope.instrument.Mass);
            }
            if ($scope.attitude.Mass == 'Unknown') {
                totalMass += 2000;
            } else {
                totalMass += parseFloat($scope.attitude.Mass);
            }
            if ($scope.propulsion.Mass == 'Unknown' || $scope.propulsionMass < 1000) {
                totalMass += 2500;
            } else {
                totalMass += parseFloat($scope.propulsion.Mass);
            }
            if ($scope.receiver.Name == $scope.attitude.Name) {
                totalMass = totalMass;
            } else if ($scope.receiver.Mass == 'Unknown') {
                totalMass += 500;
            } else {
                totalMass += parseFloat($scope.receiver.Mass);
            }
            if ($scope.antenna.Mass == 'Unknown') {
                totalMass += 100;
            } else {
                totalMass += parseFloat($scope.antenna.Mass);
            }
            if ($scope.cdh.Name == $scope.attitude.Name || $scope.cdh.Name == $scope.receiver.Name) {
                totalMass = totalMass;
            } else if ($scope.cdh.Mass == 'Unknown') {
                totalMass += 350;
            } else {
                totalMass += parseFloat($scope.cdh.Mass);
            }
            if ($scope.panels.Mass == 'Unknown') {
                totalMass += 800;
            } else {
                totalMass += (parseFloat($scope.panels.Mass) * 2);
            }
            if ($scope.batteries.Mass == 'Unknown') {
                totalMass += 400;
            } else {
                totalMass += parseFloat($scope.batteries.Mass);
            }
            if ($scope.eps.Name == $scope.attitude.Name || $scope.eps.Name == $scope.cdh.Name || $scope.eps.Name == $scope.receiver.Name) {
                totalMass = totalMass;
            } else if ($scope.eps.Mass == 'Unknown') {
                totalMass += 2000;
            } else {
                totalMass += parseFloat($scope.eps.Mass);
            }
            if ($scope.bus.Name == $scope.attitude.Name || $scope.bus.Name == $scope.receiver.Name || $scope.bus.Name == $scope.cdh.Name || $scope.bus.Name == $scope.eps.Name) {
                totalMass = totalMass;
            } else if ($scope.bus.Mass == 'Unknown') {
                totalMass += parseFloat($scope.bus.Volume) * 500;
            } else {
                totalMass += parseFloat($scope.bus.Mass);
            }
            totalMass += 1200;

            if ($scope.deployer.Mass == 'Unknown') {
                totalMassDeployer = totalMass + 1000;
            } else {
                totalMassDeployer = totalMass + parseFloat($scope.deployer.Mass);
            }

            if ($scope.instrument.Power == 'Unknown') {
                totalPower += 5;
            } else {
                totalPower += parseFloat($scope.instrument.Power);
            }
            if ($scope.attitude.Power == 'Unknown') {
                totalPower += 5;
            } else {
                totalPower += parseFloat($scope.attitude.Power);
            }
            if ($scope.propulsion.Power == 'Unknown') {
                totalPower += 60;
            } else {
                totalPower += parseFloat($scope.propulsion.Power);
            }
            if ($scope.receiver.Name == $scope.attitude.Name) {
                totalPower = totalPower;
            } else if ($scope.receiver.Power == 'Unknown') {
                totalPower += 20;
            } else {
                totalPower += parseFloat($scope.receiver.Power);
            }
            if ($scope.cdh.Name == $scope.attitude.Name || $scope.cdh.Name == $scope.receiver.Name) {
                totalPower = totalPower;
            } else if ($scope.cdh.Power == 'Unknown') {
                totalPower += 5;
            } else {
                totalPower += parseFloat($scope.cdh.Power);
            }
            if ($scope.panels.Power == 'Unknown') {
                totalPower -= 20;
            } else {
                totalPower -= parseFloat($scope.panels.Power);
            }
            if ($scope.eps.Name == $scope.attitude.Name || $scope.eps.Name == $scope.cdh.Name || $scope.eps.Name == $scope.receiver.Name) {
                totalPower = totalPower;
            } else if ($scope.eps.Power == 'Unknown') {
                totalPower += 0.01;
            } else {
                totalPower += parseFloat($scope.eps.Power);
            }
            if ($scope.bus.Name == $scope.attitude.Name || $scope.bus.Name == $scope.receiver.Name || $scope.bus.Name == $scope.cdh.Name || $scope.bus.Name == $scope.eps.Name) {
                totalPower = totalPower;
            } else if ($scope.bus.Power == 'Unknown') {
                totalPower += 0;
            } else {
                totalPower += parseFloat($scope.bus.Power);
            }
            

            if ($scope.instrument.Volume == 'Unknown') {
                totalVolume += 0.75;
            } else {
                totalVolume += parseFloat($scope.instrument.Volume);
            }
            if ($scope.attitude.Volume == 'Unknown') {
                totalVolume += 0.75;
            } else {
                totalVolume += parseFloat($scope.attitude.Volume);
            }
            if ($scope.propulsion.Volume == 'Unknown' || parseFloat($scope.propulsion.Volume) < 0.5) {
                totalVolume += 2;
            } else {
                totalVolume += parseFloat($scope.propulsion.Volume);
            }      
            if ($scope.receiver.Name == $scope.attitude.Name) {
                totalVolume = totalVolume;
            } else if ($scope.receiver.Volume == 'Unknown') {
                totalVolume += 0.5;
            } else {
                totalVolume += parseFloat($scope.receiver.Volume);
            }      
            if ($scope.antenna.Volume == 'Unknown') {
                totalVolume += 0.1;
            } else {
                totalVolume += parseFloat($scope.antenna.Volume);
            }
            if ($scope.cdh.Name == $scope.attitude.Name || $scope.cdh.Name == $scope.receiver.Name) {
                totalVolume = totalVolume;
            } else if ($scope.cdh.Volume == 'Unknown') {
                totalVolume += 0.75;
            } else {
                totalVolume += parseFloat($scope.cdh.Volume);
            }
            totalVolume += 0.25;
            if ($scope.batteries.Volume == 'Unknown') {
                totalVolume += 0;
            } else {
                totalVolume += parseFloat($scope.batteries.Volume);
            }
            if ($scope.eps.Name == $scope.attitude.Name || $scope.eps.Name == $scope.cdh.Name || $scope.eps.Name == $scope.receiver.Name) {
                totalVolume = totalVolume;
            } else if ($scope.eps.Volume == 'Unknown') {
                totalVolume += 0.5;
            } else {
                totalVolume += parseFloat($scope.eps.Volume);
            }
            totalVolume += 0.25;

            $scope.mass = (totalMass/1000).toFixed(2);
            $scope.massW = (totalMassDeployer/1000).toFixed(2);
            $scope.power = totalPower.toFixed(2);
            $scope.volume = totalVolume.toFixed(2);
        });
    };
    $scope.updateData();
});