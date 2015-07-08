spaceFrontierApp.controller("trajectoryController", function($scope,$http) {

    $scope.trajectoryparts = [];
    $scope.init = function() { 
        $http.get('http://localhost:3000/parts/propulsion').then(function(result) { 
            $scope.trajectoryparts = result.data; 
        });
    } 
    $scope.init();
  

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
          var inputspecifics, inputown = 0
          if($scope.inputoptionOne){
            var inputspecifics = $scope.inputtrajectorydV;
          }
          if($scope.inputoptionTwo) {
            var inputown = $scope.inputown;
          }
          var dV = inputown + inputspecifics;
          $scope.totaldV = dV;
          $scope.loading = false;
    }

   $(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})

    $scope.okdV=function(part){
      return part.DeltaV >= $scope.totaldV;
    };
    


    $scope.okType=function(part){
       var okType=false;
       if($scope.Thruster&&part.Type=='Thruster'){
            okType=true;
       }
       if($scope.Sail&&part.Type=='Sail'){
            okType=true;
       }
       return okType;
     };
    
        
});