spaceFrontierApp.controller("trajectoryController", function($scope, $http) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }

    $(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})

    $scope.parts = [];
    $scope.init = function() { 
        $http.get('http://localhost:3000/parts/propulsion').then(function(result) { 
            $scope.parts = result.data; 
        });
    } 
    $scope.init(); 
});