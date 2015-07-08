spaceFrontierApp.controller("displayCommController", function($scope, $http) {
    $scope.parts = [];
    $scope.init = function() {
		$http.get('/parts/comm').then(function(result) { 
			$scope.parts = result.data; 
		});
    };
    $scope.init(); 

    $scope.predicate = 'Manufacturer';
    $scope.reverse = false;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
});