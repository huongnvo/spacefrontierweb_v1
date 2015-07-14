spaceFrontierApp.controller("dataController", function($scope, $http) {
    $scope.showDatabase = false;
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $scope.updateData = function() {
        $http.get(cubesatPath).then(function(result) { 
            $scope.cubesat = result.data;
            var partextracted = {};
            partextracted = $scope.cubesat[0];

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

    $scope.parts = [];
    $scope.stations = [];

    var bits=0;
    var downlink=0;
    var memory=0;
    var mips=0;
    $scope.myClick = function() {
        if($scope.calc== "bps"){
            bits=$scope.bitssecond;
        }else if($scope.calc=="arrayx"){
            bits=$scope.sizex*$scope.sizey*$scope.integrations2;
        }else if($scope.calc=="channels"){
            bits=$scope.channel*$scope.bitschannel*$scope.integrations1;
        }
        $scope.totalbits=bits;
         memory=($scope.percent/100)*86400;
        downlink=bits*memory;
        $scope.totaldownlink=downlink+" MIPS";
        if($scope.length==0){
            mips=$scope.mips;
        }
        $scope.showDatabase = true;
    }

  	$scope.cdhparts = [];
    $scope.init = function() { 
		$http.get('/parts/cdh').then(function(result) { 
			$scope.cdhparts = result.data; 
		});
    } 
    $scope.init(); 

    $scope.savePart = function(part) {
        $scope.selectedPart = part;
    };

    $scope.okType=function(part){
        var okType=false;
        if ($scope.OBC && part.Type == 'On-Board Computer (OBC)'){
            okType = true;
        }
        else if ($scope.bus && part.Type == 'Cubesat Bus'){
            okType = true;
        }
        else if ($scope.imageprocessor && part.Type == 'Image Processor'){
            okType = true;
        }
        return okType;
    };

    $scope.okData=function(part){
        return part.MHz>=bits&&part.MIPS>=mips;

    }

    $scope.order = function(part) {
        if ($scope.sort == "Mass") {
            return part.Mass;
        }
        else if ($scope.sort == "Power") {
            return part.Power;
        }
        else if ($scope.sort == "Volume") {
            return part.Volume;
        }
        return part.Mass;
    };    

    $scope.addPart = function() {
        $http.put('/parts/cubesat-cdh/' + idstring, $scope.selectedPart)
            .success(function(data) {
                $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };
    $scope.nextPage = function() {
        var path = '/tool6?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool4?' + idstring;
        window.location = path; 
    };
});
    

