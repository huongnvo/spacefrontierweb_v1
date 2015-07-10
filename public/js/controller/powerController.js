spaceFrontierApp.controller("powerController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
    });

    $scope.parts = [];
    $scope.init = function() { 
        $http.get('/parts/power').then(function(result) { 
            $scope.parts = result.data; 
        });
    }; 
    $scope.init(); 

    $scope.filterSolar = function(part) { 
       if (!$scope.dep) {
            return part.Type == 'Solar Panels' && $scope.volume == part.Volume;
       } else {
            var ppw = 999;
            if ($scope.ppw == "onePPW"){
                ppw = 1;
            } else if ($scope.ppw == "twoPPW"){
                ppw = 2;
            } else if ($scope.ppw == "threePPW"){
                ppw = 3;
            }
            var wings=999;
            if ($scope.wing == "oneW"){
                wings = 1;
            } else if ($scope.wing == "twoW"){
                wings = 2;
            }
            return part.Type == 'Deployed Solar Panels' && part.PperWing == ppw && part.Wings == wings && $scope.volume == part.Volume;
       };

    }; 

    $scope.savePanels = function(part) {
        $scope.selectedPanels = part;
    };

    $scope.saveBatteries = function(part) {
        $scope.selectedBatteries = part;
    };

    $scope.saveEPS = function(part) {
        $scope.selectedEPS = part;
    };

    $scope.filterBattery = function(part) {
        return part.Type=='Battery';
    };

    $scope.filterEPS = function(part) {
        return part.Type=='Power Control Unit';
    };

    $scope.nextPage = function() {
        $http.put('/parts/cubesat-panels/' + idstring, $scope.selectedPanels)
            .success(function(data) {
                $scope.selectedPanels = {}; // clear the form so our user is ready to enter another
            });
        $http.put('/parts/cubesat-batteries/' + idstring, $scope.selectedBatteries)
            .success(function(data) {
                $scope.selectedBatteries = {}; // clear the form so our user is ready to enter another
            });
        $http.put('/parts/cubesat-eps/' + idstring, $scope.selectedEPS)
            .success(function(data) {
                $scope.selectedEPS = {}; // clear the form so our user is ready to enter another
            });
        var path = '/tool7?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool5?' + idstring;
        window.location = path; 
    };
});
