spaceFrontierApp.controller("attitudeController", function($scope, $http) {
    
    $scope.parts = [];
    $scope.init = function() { 
        $http.get('http://localhost:3000/parts/attitude').then(function(result) { 
            $scope.parts = result.data; 
        });
    } 
    $scope.init(); 

    $scope.getParts = function() {
        $http.get('http://localhost:3000/parts/attitude').then(function(result) {
            $scope.parts = result.data;
        });
    }

    $scope.loading = false;
    var aControl;
    $scope.myClick = function() {
       $scope.loading = true;
        var aKnow=Math.atan(parseInt($scope.resolution)/(parseInt($scope.attitude)*10000))*180/Math.PI;
        aControl=aKnow*10;
        $scope.knowledge = ""+aKnow.toFixed(5);
        $scope.control = ""+(aControl).toFixed(5);
        $scope.loading = false;
    }

     $scope.okAngle = function(part) {
       return part.Angle_prec <= aControl;
    };

     $scope.okType=function(part){
       var okType=false;
       if($scope.ACS&&part.Type=='ACS'){
            okType=true;
       }
       else if($scope.Actuator&&part.Type=='Actuator'){
            okType=true;
       }
       else if($scope.Sensor&&part.Type=='Sensor'){
            okType=true;
       }
       return okType;
     };

     $scope.order=function(part){
       if($scope.sort=="Mass"){
            return part.Mass;
       }
       else if($scope.sort=="Power"){
            return part.Power;
       }
       else if($scope.sort=="Volume"){
            return part.Volume;
       }
       return part.Mass;
     };
       

    $scope.onKeyPress = function ($event) {
      $scope.onKeyPressResult = getKeyboardEventResult($event, "Key press");
    };
});