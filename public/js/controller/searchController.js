spaceFrontierApp.controller("searchController", function($scope, $window, $rootScope, $auth) {
    var token = window.location.search.slice(1);

    $scope.attitude = function() {
        var newPath = '/attitudeAdmin?' + token;
        window.location = newPath;    
    };

    $scope.cdh = function() {
        var newPath = '/cdhAdmin?' + token;
        window.location = newPath;    
    };

    $scope.comm = function() {
        var newPath = '/commAdmin?' + token;
        window.location = newPath;    
    };

    $scope.instruments = function() {
        var newPath = '/instrumentsAdmin?' + token;
        window.location = newPath;    
    };

    $scope.power = function() {
        var newPath = '/powerAdmin?' + token;
        window.location = newPath;    
    };

    $scope.propulsion = function() {
        var newPath = '/propulsionAdmin?' + token;
        window.location = newPath;    
    };

    $scope.station = function() {
        var newPath = '/stationAdmin?' + token;
        window.location = newPath;    
    };

    $scope.thermal = function() {
        var newPath = '/thermalAdmin?' + token;
        window.location = newPath;    
    };
});
