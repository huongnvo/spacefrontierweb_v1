spaceFrontierApp.controller("resultsController", function($scope, $http) {
	var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $scope.id = '';

    $scope.mass=attitude.Mass + antenna.Mass + receiver.Mass + cdh.Mass + instrument.Mass + panels.Mass + batteries.Mass + eps.Mass + propulsion.Mass + bus.Mass + deployer.Mass + thermal.Mass;
    $scope.power=attitude.Power + antenna.Power + receiver.Power + cdh.Power + instrument.Power + panels.Power + batteries.Power + eps.Power + propulsion.Power + bus.Power + deployer.Power + thermal.Power;
    $scope.volume=attitude.Volume + antenna.Volume + receiver.Volume + cdh.Volume + instrument.Volume + panels.Volume + batteries.Volume + eps.Volume + propulsion.Volume  +  deployer.Volume + thermal.Volume;
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

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    // var content = $scope.Name +"\n"+$scope.Objectives+"\n"+$scope.Objectives+"\n"+$scope.target +"\n"+$scope.attitude +"\n"+$scope.antenna+"\n"+$scope.receiver+"\n"+$scope.cdh+"\n"+$scope.instrument+"\n"+$scope.panels+"\n"+$scope.batteries+"\n"+$scope.eps+"\n"+$scope.propulsion+"\n"+$scope.station+"\n"+$scope.bus+"\n"+$scope.deployer+"\n"+$scope.thermal;
    // var blob = new Blob([ content ], { type : 'text/plain' });
    // $scope.url = (window.URL || window.webkitURL).createObjectURL( blob );
    // app = angular.module(...);
    // app.config(['$compileProvider',
    // function ($compileProvider) {
    //     $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    // }]);
});