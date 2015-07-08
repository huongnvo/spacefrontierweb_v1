spaceFrontierApp.controller("powerController", function($scope, $http) {
    $scope.parts = [];
    $scope.init = function() { 
        $http.get('http://localhost:3000/parts/power').then(function(result) { 
            $scope.parts = result.data; 
        });
    } 
    $scope.init(); 

    $scope.getParts = function() {
        $http.get('http://localhost:3000/parts/power').then(function(result) {
            $scope.parts = result.data;
        });
    }

    $scope.filterSolar = function(part) { 
       if (!$scope.dep){
            return part.Type=='Solar Panels'&& $scope.volume==part.Volume;
       }else{
            var ppw=999;
            if($scope.ppw=="onePPW"){
                ppw=1;
            }else if($scope.ppw=="twoPPW"){
                ppw=2;
            }else if($scope.ppw=="threePPW"){
                ppw=3;
            }
            var wings=999;
            if($scope.wing=="oneW"){
                wings=1;
            }else if($scope.wing=="twoW"){
                wings=2;
            }

            return part.Type=='Deployed Solar Panels'&&part.PperWing==ppw&&part.Wings==wings&& $scope.volume==part.Volume;
       }

    } 

    $scope.filterBattery = function(part) {
        return part.Type=='Battery';
    }

    $scope.filterEPS = function(part) {
        return part.Type=='Power Control Unit';
    }
});
