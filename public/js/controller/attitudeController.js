
spaceFrontierApp.controller("attitudeController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.showDatabase = false;

    $scope.cubesat = [];
    $scope.updateData = function() {
        $http.get(cubesatPath).then(function(result) { 
            $scope.cubesat = result.data;
            var partextracted = {};
            partextracted = $scope.cubesat[0];
            
            $scope.Name = partextracted['Mission_Name'];
            $scope.Objectives = partextracted['Mission_Objectives'];
            $scope.target = partextracted['Target'];
            $scope.attitudePart = partextracted['Attitude'];
            $scope.antennaPart = partextracted['Antenna'];
            $scope.receiverPart = partextracted['Receiver'];
            $scope.cdhPart = partextracted['Cdh'];
            $scope.instrumentPart = partextracted['Instrument'];
            $scope.panelsPart = partextracted['Panels'];
            $scope.batteriesPart = partextracted['Batteries'];
            $scope.epsPart = partextracted['EPS'];
            $scope.propulsionPart = partextracted['Propulsion'];
            $scope.stationPart = partextracted['Station'];
            $scope.busPart = partextracted['Bus'];
            $scope.deployerPart = partextracted['Deployer'];
            $scope.thermalPart = partextracted['Thermal'];

        }); 
    };
    $scope.updateData();

    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }

    $scope.parts = [];
    $scope.init = function() { 
        $http.get('/parts/attitude').then(function(result) { 
            $scope.parts = result.data; 
        });
    }; 
    $scope.init(); 

    var aControl;
    $scope.myClick = function() {
        var aKnow = Math.atan(parseFloat($scope.resolution) / (parseFloat($scope.attitude) * 10000)) * 180 / Math.PI;
        aControl = aKnow * 10;
        $scope.knowledge = "" + aKnow.toFixed(5);
        $scope.control = "" + (aControl).toFixed(5);
        $scope.showDatabase = true;
    };

    $scope.okAngle = function(part) {
        if(part.Angle_prec!=null){
            return part.Angle_prec >= aControl;
        }
        return false;
    };

    $scope.okType = function(part) {
        var okType = false;
        if ($scope.ACS && part.Type == 'ACS') {
            okType = true;
        }
        else if ($scope.Actuator && part.Type == 'Actuator') {
            okType = true;
        }
        else if ($scope.Sensor && part.Type == 'Sensor') {
            okType = true;
        }
        return okType;
    };

    $scope.order = function(part) {
        if ($scope.sort == "Mass") {
            return part.Mass;
        }
        else if ($scope.sort == "Power") {
            return part.Power;
        }
        else if ($scope.sort == "Volume") {
            return part.Volume;
        }
        return part.Mass;
    };

    $scope.savePart = function(part) {
        $scope.selectedPart = part;
    }

    $scope.addPart = function() {
        $http.put('/parts/cubesat-attitude/' + idstring, $scope.selectedPart)
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            })
        $scope.updateData();
    };

    $scope.nextPage = function() {
        var path = '/tool3?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool1?' + idstring;
        window.location = path; 
    };
});

$(function () {
      $('[data-toggle="popover"]').popover()
})

spaceFrontierApp.directive('validNumber', function() {
  return {
    require: '?ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
      if(!ngModelCtrl) {
        return; 
      }
      
      ngModelCtrl.$parsers.push(function(val) {
        var clean = val.replace( /[^0-9.]+/g, '');
        if (val !== clean) {
          ngModelCtrl.$setViewValue(clean);
          ngModelCtrl.$render();
        }
        return clean;
      });
      
      element.bind('keypress', function(event) {
        if(event.keyCode === 32) {
          event.preventDefault();
        }
      });
    }
  };
});
