spaceFrontierApp.controller("instrumentsController", function($scope, $http, $location) {
    $scope.loading = false;
    $scope.myClick = function() {
        $scope.loading = true;
        //
        //$scope.loading = false;
    };

    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $http.get(cubesatPath).then(function(result) { 
        $scope.cubesat = result.data; 
    });

    $scope.instruments = [];
    $scope.init = function() { 
		$http.get('/parts/instruments').then(function(result) { 
			$scope.instruments = result.data; 
		});
    };
    $scope.init();

    $scope.targetJson = [{
        Target: "Earth"
    }];

    
    
  
  $scope.activeButton = function(id) {
    if (document.getElementById(id).style.backgroundColor != "blue") {
      document.getElementById(id).style.backgroundColor = "blue";
    } else {
     document.getElementById(id).style.backgroundColor = "lightskyblue"; 
    }
  }

  $scope.isSelected = function(id){

    return document.getElementById(id).style.backgroundColor == "blue";
  }

    $scope.searchInstruments=function(Part){

        if(Part.Measurement.indexOf("gamma")!=-1&&(isSelected('Gamma')||isSelected('O')||isSelected('Mg')||isSelected('Si')||isSelected('K')||isSelected('Ti')||isSelected('Fe')||isSelected('Th')||isSelected('U'))){
            return true;
        }else if(Part.Measurement.indexOf("x-ray")!=-1&&(isSelected('xRay')||isSelected('Na')||isSelected('Mg')||isSelected('Al')||isSelected('Si')||isSelected('S')||isSelected('Ca')||isSelected('K')||isSelected('Ti')||isSelected('Fe'))){
            return true;
        }/*else if((Part.Measurement.indexOf("UV")!==-1||Part.Measurement.indexOf("ultraviolet")!==-1)&&($scope.ultraviolet||$scope.H||$scope.He||$scope.O||$scope.Na||$scope.Ar||$scope.Ne||$scope.Mg||$scope.Fe||$scope.Si||$scope.S||$scope.Al||$scope.co2)){
            return true;
        }else if(Part.Measurement.indexOf("visible")!=-1&&($scope.visible||$scope.K||$scope.ions||$scope.Li||$scope.hematite||$scope.feldspar||$scope.tiBearing||$scope.sulfatesites||$scope.oxides||$scope.nitrates||$scope.carbonates||$scope.h2o)){
            return true;
        }else if(Part.Measurement.indexOf("near-IR")!=-1&&($scope.nearIR||$scope.h2o||$scope.co2||$scope.oxides||$scope.chChains||$scope.pyroxene||$scope.olivine||$scope.hematite||$scope.tiBearing||$scope.phyllosilicate||$scope.clay||$scope.sulfatesites||$scope.oxides||$scope.nitrates||$scope.carbonates)){
            return true;
        }else if(Part.Measurement.indexOf("short-IR")!=-1&&($scope.shortIR||$scope.h2o||$scope.co2||$scope.ch4||$scope.nh3||$scope.chChains||$scope.carbonates||$scope.pyroxene||$scope.olivine||$scope.hematite||$scope.clay||$scope.phyllosilicate||$scope.sulfatesites||$scope.oxides||$scope.nitrates||$scope.carbonates)){
            return true;
        }else if(Part.Measurement.indexOf("mid-IR")!=-1&&($scope.midIR||$scope.h2o||$scope.co2||$scope.ch4||$scope.o3||$scope.chChains||$scope.sulfatesites||$scope.pyroxene||$scope.olivine||$scope.feldspar||$scope.clay||$scope.phyllosilicate||$scope.sulfatesites||$scope.oxides||$scope.nitrates||$scope.carbonates)){
            return true;
        }else if(Part.Measurement.indexOf("long-IR")!=-1&&($scope.longIR||$scope.h2o||$scope.oxide)){
            return true;
        }else if(Part.Measurement.indexOf("far-IR")!=-1&&($scope.farIR||$scope.h2o||$scope.oxide)){
            return true;
        }else if(Part.Measurement.indexOf("microwave")!=-1&&($scope.microwave||$scope.h2o)){
            return true;
        }*/else if(Part.Measurement.indexOf("radio")!=-1&&($scope.radio||$scope.altimetry)){
            return true;
        }else if(Part.Measurement.indexOf("magnetic")!=-1&&$scope.magnetic){
            return true;
        }
        //Measurement-particle detection
         else if(Part.Measurement.indexOf("particle")!=-1&&($scope.ions||$scope.electrons||$scope.neutrons||$scope.decayParticles||$scope.magnetic)){
            return true;
        }else if(Part.Measurement.indexOf("particle")!=-1&&$scope.electrons){
            return true;
        }
        //ion
        else if(Part.Measurement.indexOf("ion")!=-1&&$scope.ions){
            return true;
        }
        //neutral
        else if((Part.Measurement.indexOf("neutral")!=-1||Part.Measurement.indexOf("neutron")!=-1)&&$scope.neutrons){
            return true;
        }
        else if(Part.Measurement.indexOf("heavy")!=-1&&$scope.decayParticles){
            return true;
        }
        

        return false;
    }

    $scope.savePlanet = function(planet) {
        $scope.targetJson = [{
            Target: planet
        }];
    };

    $scope.nextPage = function() {
        $http.put('/parts/cubesat-target/' + idstring, $scope.targetJson[0])
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            })
        var path = '/tool2?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        $http.delete(cubesatPath);
        window.location = '/tool';
    };
});