//version poop

spaceFrontierApp.controller("instrumentsController", function($scope, $http, $location, $window) {
    $scope.showTarget = false;
    $scope.showInstrumentation = false;
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

    $scope.showDetector = false;
    $scope.ray = false;
    $scope.visible = false;
    $scope.infrared = false;
    $scope.longwave = false;
    $scope.acoustic = false;
    $scope.moreRay = false;
    $scope.moreVisible = false;
    $scope.moreInfrared = false;
    $scope.moreLongwave = false;
    $scope.moreAcoustic = false;


    $scope.showRay = function() {
        $scope.ray = !$scope.ray;
        $scope.visible = false;
        $scope.infrared = false;
        $scope.longwave = false;
        $scope.acoustic = false;
        $scope.moreRay = false;
        $scope.moreVisible = false;
        $scope.moreInfrared = false;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = false;
    }
    $scope.showVisible = function(){
        $scope.ray = false;
        $scope.visible = !$scope.visible;
        $scope.infrared = false;
        $scope.longwave = false;
        $scope.acoustic = false;
        $scope.moreRay = false;
        $scope.moreVisible = false;
        $scope.moreInfrared = false;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = false;
    };

    $scope.showInfrared = function() {
        $scope.ray = false;
        $scope.visible = false;
        $scope.infrared = !$scope.infrared;
        $scope.longwave = false;
        $scope.acoustic = false;
        $scope.moreRay = false;
        $scope.moreVisible = false;
        $scope.moreInfrared = false;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = false;
    };

    $scope.showLongwave = function() {
        $scope.ray = false;
        $scope.visible = false;
        $scope.infrared = false;
        $scope.longwave = !$scope.longwave;
        $scope.acoustic = false;        
        $scope.moreRay = false;
        $scope.moreVisible = false;
        $scope.moreInfrared = false;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = false;
    };
    $scope.showAcoustic = function() {
        $scope.ray = false;
        $scope.visible = false;
        $scope.infrared = false;
        $scope.longwave = false;
        $scope.acoustic = !$scope.acoustic;
        $scope.moreRay = false;
        $scope.moreVisible = false;
        $scope.moreInfrared = false;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = false;
    };

    $scope.showMoreRay = function() {
        $scope.ray = false;
        $scope.visible = false;
        $scope.infrared = false;
        $scope.longwave = false;
        $scope.acoustic = false;
        $scope.moreRay = !$scope.moreRay;
        $scope.moreVisible = false;
        $scope.moreInfrared = false;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = false;
    }
    $scope.showMoreVisible = function(){
        $scope.ray = false;
        $scope.visible = false;
        $scope.infrared = false;
        $scope.longwave = false;
        $scope.acoustic = false;
        $scope.moreRay = false;
        $scope.moreVisible = !$scope.moreVisible;
        $scope.moreInfrared = false;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = false;
    };

    $scope.showMoreInfrared = function() {        
        $scope.ray = false;
        $scope.visible = false;
        $scope.infrared = false;
        $scope.longwave = false;
        $scope.acoustic = false;
        $scope.moreRay = false;
        $scope.moreVisible = false;
        $scope.moreInfrared = !$scope.moreInfrared;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = false;
    };

    $scope.showMoreLongwave = function() {        
        $scope.ray = false;
        $scope.visible = false;
        $scope.infrared = false;
        $scope.longwave = false;
        $scope.acoustic = false;
        $scope.moreRay = false;
        $scope.moreVisible = false;
        $scope.moreInfrared = false;
        $scope.moreLongwave = !$scope.moreLongwave;
        $scope.moreAcoustic = false;
    };
    $scope.showMoreAcoustic = function() {        
        $scope.ray = false;
        $scope.visible = false;
        $scope.infrared = false;
        $scope.longwave = false;
        $scope.acoustic = false;
        $scope.moreRay = false;
        $scope.moreVisible = false;
        $scope.moreInfrared = false;
        $scope.moreLongwave = false;
        $scope.moreAcoustic = !$scope.moreAcoustic;
    };


    $(document).ready(function() {
        $('.nav-tabs > li > a').click(function(event){
            event.preventDefault();//stop browser to take action for clicked anchor
     
            //get displaying tab content jQuery selector
            var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');                  
     
            //find actived navigation and remove 'active' css
            var actived_nav = $('.nav-tabs > li.active');
            actived_nav.removeClass('active');
     
            //add 'active' css into clicked navigation
            $(this).parents('li').addClass('active');
     
            //hide displaying tab content
            $(active_tab_selector).removeClass('active');
            $(active_tab_selector).addClass('hide');
     
            //show target tab content
            var target_tab_selector = $(this).attr('href');
            $(target_tab_selector).removeClass('hide');
            $(target_tab_selector).addClass('active');
        });
    });
    
    $scope.cubesat = [];
    $scope.updateData = function() {
        $http.get(cubesatPath).then(function(result) { 
            $scope.cubesat = result.data;
            var partextracted = {};
            partextracted = $scope.cubesat[0];
            $scope.Mass = partextracted['Mass'];
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

    $scope.instruments = [];
    $scope.init = function() { 
        $http.get('/parts/instruments').then(function(result) { 
            $scope.instruments = result.data; 
        });
    };
    $scope.init();

    
    $scope.wavelengths=[];
    $scope.numClicked=0;
  
    $scope.activeButton = function(id) {
        if (document.getElementById(id).style.backgroundColor != "blue") {
            document.getElementById(id).style.backgroundColor = "blue";
            document.getElementById(id).style.color = "white";
            $scope.numClicked+=1;
            if(id=='Long-IR'){
                $scope.longir = true;
                $scope.wavelengths.push("long-IR");
            }if(id=='Far-IR'){
                $scope.farir = true;
                $scope.wavelengths.push("far-IR");
            }if(id=='Radiowave'){
                $scope.radio = true;
                $scope.wavelengths.push("radio");
            }if(id=='Microwave'){
                $scope.micro = true;
                $scope.wavelengths.push("microwave");
            }if(id=='Gamma'||id=='O'||id=='Mg'||id=='Si'||id=='K'||id=='Ti'||id=='Fe'||id=='Th'||id=='U'){
                $scope.gamma = true;
                $scope.wavelengths.push("gamma");
            }if(id=='X-ray'||id=='Na'||id=='Mg'||id=='Al'||id=='Si'||id=='S'||id=='Ca'||id=='K'||id=='Ti'||id=='Fe'){
                $scope.xray = true;
                $scope.wavelengths.push("x-ray");
            }if(id=='UV'||id=='H'||id=='He'||id=='O'||id=='Na'||id=='Ar'||id=='Ne'||id=='Mg'||id=='Fe'||id=='Si'||id=='S'||id=='Al'){
                $scope.uv = true;
                $scope.wavelengths.push("UV");
                $scope.wavelengths.push("ultraviolet");
            }if(id=='Visible'||id=='K'||id=='Li'){
                $scope.visibleinfo = true;
                $scope.wavelengths.push("visible");
            }if(id=='Near-IR'){
                $scope.nearirinfo = true;
                $scope.wavelengths.push("near-IR");
            }if(id=='Short-IR'){
                $scope.shortirinfo = true;
                $scope.wavelengths.push("short-IR");
            }if(id=='Mid-IR'){
                $scope.midir = true;
                $scope.wavelengths.push("mid-IR");
            }if(id=='Cosmic'){
                $scope.cosmic = true;
                $scope.wavelengths.push("cosmic");
            }

        } else {
            $scope.numClicked-=1;
            if( id=='Gamma'||id=='O'||id=='Mg'||id=='Si'||id=='K'||id=='Ti'||id=='Fe'||id=='Th'||id=='U'){
                // document.getElementById(id).style.backgroundColor = "red";
                if($scope.wavelengths.indexOf("gamma")!==-1){
                    $scope.gamma = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("gamma"),1);
                }
            }

             if(id=='Microwave'){
                if($scope.wavelengths.indexOf("microwave")!==-1){
                    //document.getElementById(id).style.backgroundColor = "red";
                    $scope.micro = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("microwave"),1);
                }
            }

             if(id=='X-ray'||id=='Na'||id=='Mg'||id=='Al'||id=='Si'||id=='S'||id=='Ca'||id=='K'||id=='Ti'||id=='Fe'){
                if($scope.wavelengths.indexOf("x-ray")!==-1){
                    $scope.xray = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("x-ray"),1);
                }
            }
             if(id=='UV'||id=='H'||id=='He'||id=='O'||id=='Na'||id=='Ar'||id=='Ne'||id=='Mg'||id=='Fe'||id=='Si'||id=='S'||id=='Al'){
                if($scope.wavelengths.indexOf("UV")!==-1){
                    $scope.uv = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("UV"),1);
                }
                if($scope.wavelengths.indexOf("ultraviolet")!==-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("ultraviolet"),1);
                }
            }
             if(id=='Visible'||id=='K'||id=='Li'){
                if($scope.wavelengths.indexOf("visible")!==-1){
                    $scope.visibleinfo = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("visible"),1);
                }
            } if(id=='Near-IR'){
                if($scope.wavelengths.indexOf("near-IR")!==-1){
                    $scope.nearirinfo = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("near-IR"),1);
                }
            } if(id=='Short-IR'){
                if($scope.wavelengths.indexOf("short-IR")!==-1){
                    $scope.shortirinfo = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("short-IR"),1);
                }
            } if(id=='Mid-IR'){
                if($scope.wavelengths.indexOf("mid-IR")!==-1){
                    $scope.midir = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("mid-IR"),1);
                }
            } if(id=='Long-IR'){
                if($scope.wavelengths.indexOf("long-IR")!==-1){
                    $scope.longir = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("long-IR"),1);
                }
            } if(id=='Far-IR'){
                if($scope.wavelengths.indexOf("far-IR")!==-1){
                    $scope.farir = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("far-IR"),1);
                }
            } if(id=='Radiowave'){
                if($scope.wavelengths.indexOf("radio")!==-1){
                    $scope.radio = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("radio"),1);
                }
            } if(id=='Cosmic'){
                if($scope.wavelengths.indexOf("cosmic")!==-1){
                    $scope.cosmic = false;
                    $scope.wavelengths.splice($scope.wavelengths.indexOf("cosmic"),1);
                }
            }
            document.getElementById(id).style.color = "black";
            document.getElementById(id).style.backgroundColor = "white";
        }       
    }

   $scope.isSelected = function(id){
        return document.getElementById(id).style.backgroundColor =="blue";
    }

    $scope.searchInstruments=function(instrument){

        for (var i=0; i<$scope.wavelengths.length; i++){
            if(instrument.Measurement.indexOf($scope.wavelengths[i])!==-1){
                return true;
            }
        }

        if((instrument.Measurement.indexOf("UV")!==-1||instrument.Measurement.indexOf("ultraviolet")!==-1)&&$scope.co2){
            return true;
        }if(instrument.Measurement.indexOf("visible")!==-1&&($scope.K||$scope.ions||$scope.Li||$scope.hematite||$scope.feldspar||$scope.tiBearing||$scope.sulfatesites||$scope.oxides||$scope.nitrates||$scope.carbonates||$scope.h2o)){
            return true;
        }if(instrument.Measurement.indexOf("near-IR")!==-1&&($scope.h2o||$scope.co2||$scope.oxides||$scope.chChains||$scope.pyroxene||$scope.olivine||$scope.hematite||$scope.tiBearing||$scope.phyllosilicate||$scope.clay||$scope.sulfatesites||$scope.oxides||$scope.nitrates||$scope.carbonates)){
            return true;
        } if(instrument.Measurement.indexOf("short-IR")!==-1&&($scope.h2o||$scope.co2||$scope.ch4||$scope.nh3||$scope.chChains||$scope.carbonates||$scope.pyroxene||$scope.olivine||$scope.hematite||$scope.clay||$scope.phyllosilicate||$scope.sulfatesites||$scope.oxides||$scope.nitrates||$scope.carbonates)){
            return true;
        } if(instrument.Measurement.indexOf("mid-IR")!==-1&&($scope.h2o||$scope.co2||$scope.ch4||$scope.o3||$scope.chChains||$scope.sulfatesites||$scope.pyroxene||$scope.olivine||$scope.feldspar||$scope.clay||$scope.phyllosilicate||$scope.sulfatesites||$scope.oxides||$scope.nitrates||$scope.carbonates)){
            return true;
        } if(instrument.Measurement.indexOf("long-IR")!==-1&&($scope.h2o||$scope.oxide)){
            return true;
        } if(instrument.Measurement.indexOf("far-IR")!==-1&&($scope.h2o||$scope.oxide)){
            return true;
        } if(instrument.Measurement.indexOf("microwave")!==-1&&($scope.h2o)){
            return true;
        } if(instrument.Measurement.indexOf("radio")!==-1&&($scope.altimetry)){
            return true;
        } if(instrument.Measurement.indexOf("magnetic")!==-1&&$scope.magnetic){
            return true;
        }
        //Measurement-particle detection
          if(instrument.Measurement.indexOf("particle")!==-1&&($scope.ions||$scope.electrons||$scope.neutrons||$scope.decayParticles||$scope.magnetic)){
            return true;
        } if(instrument.Measurement.indexOf("particle")!==-1&&$scope.electrons){
            return true;
        } if(instrument.Measurement.indexOf("neutral atoms")!==-1&&$scope.neutralAtoms){
            return true;
        }
        //ion
         if(instrument.Measurement.indexOf("ion")!==-1&&$scope.ions){
            return true;
        }
        //neutral
         if((instrument.Measurement.indexOf("neutral")!==-1||instrument.Measurement.indexOf("neutron")!==-1)&&$scope.neutrons){
            return true;
        }
         if(instrument.Measurement.indexOf("heavy")!==-1&&$scope.decayParticles){
            return true;
        }
 
        if ($scope.ignorefilters){
            return true;
        }
        return false;
    }

    $scope.nextInstrumentation = function (){
        $scope.showTarget=true;
        $scope.showInstrumentation=true;
    }
    $scope.click=function(){

        return $scope.numClicked!==0||$scope.neutralAtoms||$scope.co2||$scope.hematite||$scope.feldspar||$scope.tiBearing||$scope.oxides||$scope.nitrates||$scope.carbonates||$scope.h2o||$scope.pyroxene||$scope.hematite||$scope.clay||$scope.nitrates||$scope.carbonates||$scope.ch4||$scope.nh3||$scope.pyroxene||$scope.olivine||$scope.hematite||$scope.clay||$scope.phyllosilicate||$scope.nitrates||$scope.ch4||$scope.o3||$scope.pyroxene||$scope.feldspar||$scope.clay||$scope.nitrates||$scope.carbonates||$scope.oxide||$scope.altimetry||$scope.magnetic||$scope.decayParticles||$scope.magnetic||$scope.electrons||$scope.ions||$scope.neutrons||$scope.chChains||$scope.sulfatesites;
    }

    $scope.saveInstrument = function(instrument) {
        $scope.selectedInstrument = instrument;
    };

    $scope.addInstrument = function() {
        $http.put('/parts/cubesat-instrument/' + idstring, $scope.selectedInstrument)
            .success(function(data) {
                // $scope.selectedInstrument = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();

        var massAdd=620;
        if(!$scope.selectedInstrument.Mass.equals("Unknown")){
            massAdd=parseInt($scope.selectedInstrument.Mass);
        }


        $http.put('/parts/cubesat-instrument/' + idstring, massAdd)
            .success(function(data) {
                // $scope.selectedInstrument = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
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

    $scope.nextPage = function() {
            var path = '/tool2?' + idstring;
            window.location = path;   
    };

    $scope.prevPage = function() {
        
        window.location = '/tool0?'+ idstring;
    };
});
