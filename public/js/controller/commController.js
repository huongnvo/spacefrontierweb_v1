spaceFrontierApp.controller("commController", function($scope) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    }
});