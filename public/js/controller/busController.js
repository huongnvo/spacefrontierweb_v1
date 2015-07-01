spaceFrontierApp.controller("busController", function($scope) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $scope.thermalparts = [];
    $scope.init = function() { 
		$http.get('http://localhost:3000/parts/thermal').then(function(result) { 
			$scope.thermalparts = result.data; 
		});
    } 
    $scope.init(); 
});