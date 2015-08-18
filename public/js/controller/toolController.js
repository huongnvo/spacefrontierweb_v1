spaceFrontierApp.controller("toolController", function($scope, $http) {
    $scope.myInterval = false;

    $scope.cubesat = [];
    var idstring = '';
    $http.post('/parts/cubesat').then(function(result) { 
        $scope.cubesat = result.data; 
        idstring = $scope.cubesat['_id'] + '';
    });

    $scope.buildCubesat = function() {
        var path = '/tool0?' + idstring;
        window.location = path;    
    };

    var slider = new Slider('#ex1', {
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
});