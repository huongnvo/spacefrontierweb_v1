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
        Target: "Moon"
    }];

    
    $scope.wavelengths=[];
  
    $scope.activeButton = function(id) {
        if (document.getElementById(id).style.backgroundColor != "blue") {
             document.getElementById(id).style.backgroundColor = "blue";

        if($scope.wavelengths.indexOf("long-IR")==-1&&id=='Long-IR'){
            $scope.wavelengths.push("long-IR");
        } if($scope.wavelengths.indexOf("far-IR")==-1&&id=='Far-IR'){
            $scope.wavelengths.push("far-IR");
        } 

        } else {
            document.getElementById(id).style.backgroundColor = "lightskyblue";
            if(!$scope.isSelected('Gamma')&&!$scope.isSelected('O')&&!$scope.isSelected('Mg')&&!$scope.isSelected('Si')&&!$scope.isSelected('K')&&!$scope.isSelected('Ti')&&!$scope.isSelected('Fe')&&!$scope.isSelected('Th')&&!$scope.isSelected('U')){
                if($scope.wavelengths.indexOf("gamma")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("gamma"),1);
                }
            } if(!$scope.isSelected('X-ray')&&!$scope.isSelected('Na')&&!$scope.isSelected('Mg')&&!$scope.isSelected('Al')&&!$scope.isSelected('Si')&&!$scope.isSelected('S')&&!$scope.isSelected('Ca')&&!$scope.isSelected('K')&&!$scope.isSelected('Ti')&&!$scope.isSelected('Fe')){
                if($scope.wavelengths.indexOf("x-ray")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("x-ray"),1);
                }
            }if(!$scope.isSelected('UV')&&!$scope.isSelected('H')&&!$scope.isSelected('He')&&!$scope.isSelected('O')&&!$scope.isSelected('Na')&&!$scope.isSelected('Ar')&&!$scope.isSelected('Ne')&&!$scope.isSelected('Mg')&&!$scope.isSelected('Fe')&&!$scope.isSelected('Si')&&!$scope.isSelected('S')&&!$scope.isSelected('Al')){
                if($scope.wavelengths.indexOf("UV")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("UV"),1);
                }
                if($scope.wavelengths.indexOf("ultraviolet")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("ultraviolet"),1);
                }
            } if(!$scope.isSelected('Visible')&&!$scope.isSelected('K')&&!$scope.isSelected('Li')){
                if($scope.wavelengths.indexOf("visible")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("visible"),1);
                }
            } if(!$scope.isSelected('Near-IR')){
                if($scope.wavelengths.indexOf("near-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("near-IR"),1);
                }
            } if(!$scope.isSelected('Short-IR')){
                if($scope.wavelengths.indexOf("short-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("short-IR"),1);
                }
            } if(!$scope.isSelected('Mid-IR')){
                if($scope.wavelengths.indexOf("mid-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("mid-IR"),1);
                }
            } if(!$scope.isSelected('Long-IR')){
                if($scope.wavelengths.indexOf("long-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("long-IR"),1);
                }
            } if(!$scope.isSelected('Far-IR')){
                if($scope.wavelengths.indexOf("far-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("far-IR"),1);
                }
            } if(!$scope.isSelected('Microwave')){
                if($scope.wavelengths.indexOf("microwave")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("microwave"),1);
                }
            } if(!$scope.isSelected('Radiowave')){
                if($scope.wavelengths.indexOf("radio")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("radio"),1);
                }
            }
        }



        if($scope.wavelengths.indexOf("radio")==-1&&$scope.isSelected('Radiowave')){
            $scope.wavelengths.push("radio");
        }
        if($scope.wavelengths.indexOf("microwave")==-1&&$scope.isSelected('Microwave')){
            $scope.wavelengths.push("microwave");
        }

        if($scope.wavelengths.indexOf("gamma")==-1&&$scope.isSelected('Gamma')||$scope.isSelected('O')||$scope.isSelected('Mg')||$scope.isSelected('Si')||$scope.isSelected('K')||$scope.isSelected('Ti')||$scope.isSelected('Fe')||$scope.isSelected('Th')||$scope.isSelected('U')){
            $scope.wavelengths.push("gamma");
        } if($scope.wavelengths.indexOf("x-ray")==-1&&$scope.isSelected('X-ray')||$scope.isSelected('Na')||$scope.isSelected('Mg')||$scope.isSelected('Al')||$scope.isSelected('Si')||$scope.isSelected('S')||$scope.isSelected('Ca')||$scope.isSelected('K')||$scope.isSelected('Ti')||$scope.isSelected('Fe')){
            $scope.wavelengths.push("x-ray");
        } if($scope.wavelengths.indexOf("UV")==-1&&$scope.isSelected('UV')||$scope.isSelected('H')||$scope.isSelected('He')||$scope.isSelected('O')||$scope.isSelected('Na')||$scope.isSelected('Ar')||$scope.isSelected('Ne')||$scope.isSelected('Mg')||$scope.isSelected('Fe')||$scope.isSelected('Si')||$scope.isSelected('S')||$scope.isSelected('Al')){
            $scope.wavelengths.push("UV");
            $scope.wavelengths.push("ultraviolet");
        } if($scope.wavelengths.indexOf("visible")==-1&&$scope.isSelected('Visible')||$scope.isSelected('K')||$scope.isSelected('Li')){
            $scope.wavelengths.push("visible");
        } if($scope.wavelengths.indexOf("near-IR")==-1&&$scope.isSelected('Near-IR')){
            $scope.wavelengths.push("near-IR");
        } if($scope.wavelengths.indexOf("short-IR")==-1&&$scope.isSelected('Short-IR')){
            $scope.wavelengths.push("short-IR");
        } if($scope.wavelengths.indexOf("mid-IR")==-1&&$scope.isSelected('Mid-IR')){
            $scope.wavelengths.push("mid-IR");
        } 
    }

   $scope.isSelected = function(id){

        return document.getElementById(id).style.backgroundColor =="blue";
    }

    $scope.searchInstruments=function(Part){
        for(wavelength in $scope.wavelengths){
            if(Part.Measurement.indexOf(wavelength)!=-1){
                return true;
            }
        }

        if((Part.Measurement.indexOf("UV")!==-1||Part.Measurement.indexOf("ultraviolet")!==-1)&&$scope.co2){
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
        }else if(Part.Measurement.indexOf("radio")!=-1&&($scope.radio||$scope.altimetry)){
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