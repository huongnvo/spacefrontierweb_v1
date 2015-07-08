spaceFrontierApp.controller("dataController", function($scope, $http) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";


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

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        $scope.loading = false;
    }

  	$scope.cdhparts = [];
    $scope.init = function() { 
		$http.get('http://localhost:3000/parts/cdh').then(function(result) { 
			$scope.cdhparts = result.data; 
		});
    } 
    $scope.init(); 
});
    


    $scope.okType=function(part){
       var okType=false;
       if($scope.OBC&&part.Type=='On-Board Computer (OBC)'){
            okType=true;
       }
       else if($scope.bus&&part.Type=='Cubesat Bus'){
            okType=true;
       }
       else if($scope.imageprocessor&&part.Type=='Image Processor'){
            okType=true;
       }
       return okType;
     };