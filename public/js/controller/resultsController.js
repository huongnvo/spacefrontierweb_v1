spaceFrontierApp.controller("resultsController", function($scope, $http) {
	var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $scope.id = '';
    $scope.attitude = {};
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data;
        var partextracted = {};
        partextracted = $scope.cubesat[0];

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

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }
});