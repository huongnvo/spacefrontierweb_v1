spaceFrontierApp.controller("dataController", function($scope, $http) {

    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
    });

    $scope.parts = [];
    $scope.stations = [];

    $scope.loading = false;

    var bits=0;
    var downlink=0;
    var memory=0;
    var mips=0;
    $scope.myClick = function() {
        $scope.loading = true;
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
        $scope.loading = false;
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

    $scope.nextPage = function() {
        $http.put('/parts/cubesat-cdh/' + idstring, $scope.selectedPart)
            .success(function(data) {
                $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        var path = '/tool6?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool4?' + idstring;
        window.location = path; 
    };
});
    

