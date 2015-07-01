spaceFrontierApp.controller("instrumentsController", function($scope) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $scope.instruments = [];
    $scope.init = function() { 
		$http.get('http://localhost:3000/parts/instruments').then(function(result) { 
			$scope.instruments = result.data; 
		});
    } 
    $scope.init(); 
});