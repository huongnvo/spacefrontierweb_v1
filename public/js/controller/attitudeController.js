spaceFrontierApp.controller("attitudeController", function($scope) {
    $scope.navBarSrc = "tmpl/navbar.html";
    $scope.footerSrc = "tmpl/footer.html";

    $scope.totalItems = 100;
    $scope.currentPage = 1;
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };
    $scope.maxSize = 8;
    $scope.bigTotalItems = 72;
    $scope.bigCurrentPage = 2;
});
