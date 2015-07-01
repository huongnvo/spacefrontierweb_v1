spaceFrontierApp.controller("powerController", function($scope) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $scope.powerparts = [];
    $scope.init = function() { 
		$http.get('http://localhost:3000/parts/power').then(function(result) { 
			$scope.powerparts = result.data; 
		});
    } 
    $scope.init(); 
});
