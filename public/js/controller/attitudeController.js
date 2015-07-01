spaceFrontierApp.controller("attitudeController", function($scope) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

  	$scope.attitudeparts = [];
    $scope.init = function() { 
		$http.get('http://localhost:3000/parts/attitude').then(function(result) { 
			$scope.attitudeparts = result.data; 
		});
    } 
    $scope.init(); 
});
