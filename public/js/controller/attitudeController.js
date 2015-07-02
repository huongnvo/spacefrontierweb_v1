spaceFrontierApp.controller("attitudeController", function($scope, $http) {
    $scope.parts = [];
    $scope.init = function() { 
        $http.get('http://localhost:3000/parts/attitude').then(function(result) { 
            $scope.parts = result.data; 
        });
    } 
    $scope.init(); 

    $scope.createPart = function() {
        $http.get('http://localhost:3000/parts/attitude', $scope.form).then(function(result) {
            $scope.form = {};
            $scope.parts = result.data;
        });
    }

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        // $scope.result = $scope.attitude + 0;
        // $scope.spatial = $scope.resolution + 0;
        // $scope.loading = false;
    }
});