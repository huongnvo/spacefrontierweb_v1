spaceFrontierApp.controller("commController", function($scope) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $scope.commparts = [];
    $scope.stationparts = [];
    $scope.init = function() { 
		$http.get('http://localhost:3000/parts/comm').then(function(result) { 
			$scope.commparts = result.data; 
		});
		$http.get('http://localhost:3000/parts/station').then(function(result) { 
			$scope.stationparts = result.data; 
		});
    } 
    $scope.init(); 
});