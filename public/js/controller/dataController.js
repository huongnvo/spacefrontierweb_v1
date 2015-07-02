spaceFrontierApp.controller("dataController", function($scope, $http) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

  	$scope.cdhparts = [];
    $scope.init = function() { 
		$http.get('http://localhost:3000/parts/cdh').then(function(result) { 
			$scope.cdhparts = result.data; 
		});
    } 
    $scope.init(); 
});