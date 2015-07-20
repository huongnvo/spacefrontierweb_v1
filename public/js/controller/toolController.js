spaceFrontierApp.controller("toolController", function($scope, $http) {
    $scope.myInterval = false;

    $scope.cubesat = [];
    var idstring = '';
    $http.post('/parts/cubesat').then(function(result) { 
        $scope.cubesat = result.data; 
        idstring = $scope.cubesat['_id'] + '';
    });

    $scope.buildCubesat = function() {
        var path = '/tool1?' + idstring;
        window.location = path;    
    };

    var slider = new Slider('#ex1', {
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });

    // var slider = new Slider("#ex13", {
    //     ticks: [0, 100, 200, 300, 400],
    //     ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
    //     ticks_snap_bounds: 30
    // });
});