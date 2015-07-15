//version poop

spaceFrontierApp.controller("instrumentsController", function($scope, $http, $location) {
    $scope.showTarget = false;
    $scope.showInstrumentation = false;
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.cubesat = [];
    $scope.updateData = function() {
        $http.get(cubesatPath).then(function(result) { 
            $scope.cubesat = result.data;
            var partextracted = {};
            partextracted = $scope.cubesat[0];

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

            if(id=='Long-IR'){
                $scope.wavelengths.push("long-IR");
            } if(id=='Far-IR'){
                $scope.wavelengths.push("far-IR");
            }  if(id=='Radiowave'){
                $scope.wavelengths.push("radio");
            } if(id=='Microwave'){
                $scope.wavelengths.push("microwave");
            } if(id=='Gamma'||id=='O'||id=='Mg'||id=='Si'||id=='K'||id=='Ti'||id=='Fe'||id=='Th'||id=='U'){
                $scope.wavelengths.push("gamma");
            } if(id=='X-ray'||id=='Na'||id=='Mg'||id=='Al'||id=='Si'||id=='S'||id=='Ca'||id=='K'||id=='Ti'||id=='Fe'){
                    $scope.wavelengths.push("x-ray");
            } if(id=='UV'||id=='H'||id=='He'||id=='O'||id=='Na'||id=='Ar'||id=='Ne'||id=='Mg'||id=='Fe'||id=='Si'||id=='S'||id=='Al'){
                    $scope.wavelengths.push("UV");
                    $scope.wavelengths.push("ultraviolet");
            } if(id=='Visible'||id=='K'||id=='Li'){
                    $scope.wavelengths.push("visible");
            } if(id=='Near-IR'){
                $scope.wavelengths.push("near-IR");
            } if(id=='Short-IR'){
                $scope.wavelengths.push("short-IR");
            } if(id=='Mid-IR'){
                $scope.wavelengths.push("mid-IR");
            } 

        } else {
            
            if( id=='Gamma'||id=='O'||id=='Mg'||id=='Si'||id=='K'||id=='Ti'||id=='Fe'||id=='Th'||id=='U'){
               // document.getElementById(id).style.backgroundColor = "red";
                 if($scope.wavelengths.indexOf("gamma")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("gamma"),1);
                }
            }

            if(id=='Microwave'){
                if($scope.wavelengths.indexOf("microwave")!=-1){
                    document.getElementById(id).style.backgroundColor = "red";
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("microwave"),1);
                }
            }

            if(id=='X-ray'||id=='Na'||id=='Mg'||id=='Al'||id=='Si'||id=='S'||id=='Ca'||id=='K'||id=='Ti'||id=='Fe'){
                if($scope.wavelengths.indexOf("x-ray")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("x-ray"),1);
                }
            }
            if(id=='UV'||id=='H'||id=='He'||id=='O'||id=='Na'||id=='Ar'||id=='Ne'||id=='Mg'||id=='Fe'||id=='Si'||id=='S'||id=='Al'){
                if($scope.wavelengths.indexOf("UV")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("UV"),1);
                }
                if($scope.wavelengths.indexOf("ultraviolet")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("ultraviolet"),1);
                }
            }
            if(id=='Visible'||id=='K'||id=='Li'){
                if($scope.wavelengths.indexOf("visible")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("visible"),1);
                }
            }if(id=='Near-IR'){
                if($scope.wavelengths.indexOf("near-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("near-IR"),1);
                }
            }if(id=='Short-IR'){
                if($scope.wavelengths.indexOf("short-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("short-IR"),1);
                }
            }if(id=='Mid-IR'){
                if($scope.wavelengths.indexOf("mid-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("mid-IR"),1);
                }
            }if(id=='Long-IR'){
                if($scope.wavelengths.indexOf("long-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("long-IR"),1);
                }
            }if(id=='Far-IR'){
                if($scope.wavelengths.indexOf("far-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("far-IR"),1);
                }
            }if(id=='Radiowave'){
                if($scope.wavelengths.indexOf("radio")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("radio"),1);
                }
            }

            document.getElementById(id).style.backgroundColor = "lightskyblue";
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

    $scope.nextTarget = function() {
        $scope.showTarget = true;
        $scope.showInstrumentation = false;
    };

    $scope.nextInstrumentation = function() {
        $scope.showTarget = true;
        $scope.showInstrumentation = true;
    };

    $scope.addTarget = function() {
        $http.put('/parts/cubesat-target/' + idstring, $scope.targetJson[0])
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.saveInstrument = function(instrument) {
        $scope.selectedInstrument = instrument;
    };

    $scope.addInstrument = function() {
        $http.put('/parts/cubesat-instrument/' + idstring, $scope.selectedInstrument)
            .success(function(data) {
                $scope.selectedInstrument = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
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