spaceFrontierApp.controller("searchController", function($scope, $window, $rootScope, $auth) {
    var token = window.location.search.slice(1);
    $scope.decode = function() {
        if (token != '') {
            var payload = token.split('=')[1];
            var base64Url = payload.split('.')[1];
            var output = JSON.parse(atob(base64Url));
            $scope.name = output.name;
            $scope.email = output.email;
            $scope.admin = output.admin;
            $scope.showInfo = true;
        }
    };
    $scope.decode();

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

    $scope.logOutHome = function() {
        swal({
            title: "Are you sure?",
            text: "This will log you out of the current session.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Log Out",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location = "/home";
            } else {
                swal("Cancelled", "You will remain logged in.", "success");
            }
        });
    };

    $scope.logOutTool = function() {
        swal({
            title: "Are you sure?",
            text: "This will log you out of the current session.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Log Out",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location = "/tool";
            } else {
                swal("Cancelled", "You will remain logged in.", "success");
            }
        });
    };

    $scope.logOutAbout = function() {
        swal({
            title: "Are you sure?",
            text: "This will log you out of the current session.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Log Out",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location = "/about";
            } else {
                swal("Cancelled", "You will remain logged in.", "success");
            }
        });
    };

    $scope.logOutParts = function() {
        swal({
            title: "Are you sure?",
            text: "This will log you out of the current session.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Log Out",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location = "/partslist";
            } else {
                swal("Cancelled", "You will remain logged in.", "success");
            }
        });
    };
});
