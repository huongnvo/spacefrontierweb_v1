spaceFrontierApp.controller("dataController", function($scope, $http) {
    //$scope.throughputfilter = function(part) {
    //    var throughput = 0
    //    if($scope.input1 = "option1") {
    //        var throughput = $scope.channel * $scope.bitschannel * $scope.integrations1;
    //    }
    //    else if($scope.input1 = "option2") {
    //       var throughput = $scope.sizex * $scope.sizey * $scope.integrations2;
    //    }
    //    else if($scope.input1 = "option3") {
    //        var throughput = $scope.bitssecond;
    //    }
    //    return parts.MHz >= $scope.totalbits;
    //}
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
    });

    $scope.parts = [];
    $scope.stations = [];

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        $scope.loading = false;
    }

  	$scope.cdhparts = [];
    $scope.init = function() { 
		$http.get('/parts/cdh').then(function(result) { 
			$scope.cdhparts = result.data; 
		});
    } 
    $scope.init(); 

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

    $scope.nextPage = function() {
        var path = '/tool6?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool4?' + idstring;
        window.location = path; 
    };
});
    

