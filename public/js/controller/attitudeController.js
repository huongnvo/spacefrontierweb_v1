spaceFrontierApp.controller("attitudeController", function($scope, $http) {
    $scope.parts = [];
    $scope.init = function() { 
        $http.get('/parts/attitude').then(function(result) { 
            $scope.parts = result.data; 
        });
    } 
    $scope.init(); 

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        // $scope.result = $scope.attitude + 0;
        // $scope.spatial = $scope.resolution + 0;
        // $scope.loading = false;
    }
});