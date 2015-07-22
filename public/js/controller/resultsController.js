spaceFrontierApp.controller("resultsController", function($scope, $http) {
	var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $scope.id = '';


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
    });

 });