//version poop

spaceFrontierApp.controller("instrumentsController", function($scope, $http, $location, $window) {
    $scope.showTarget = false;
    $scope.showInstrumentation = false;
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;

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

    $scope.targetJson = [{
        Target: ""
    }];

    
    $scope.wavelengths=[];
    $scope.numClicked=0;
  
    $scope.activeButton = function(id) {
        if (document.getElementById(id).style.backgroundColor != "blue") {
             document.getElementById(id).style.backgroundColor = "blue";
             $scope.numClicked+=1;
            if(id=='Long-IR'){
                $scope.wavelengths.push("long-IR");
            }else if(id=='Far-IR'){
                $scope.wavelengths.push("far-IR");
            }else if(id=='Radiowave'){
                $scope.wavelengths.push("radio");
            }else if(id=='Microwave'){
                $scope.wavelengths.push("microwave");
            }else if(id=='Gamma'||id=='O'||id=='Mg'||id=='Si'||id=='K'||id=='Ti'||id=='Fe'||id=='Th'||id=='U'){
                $scope.wavelengths.push("gamma");
            }else if(id=='X-ray'||id=='Na'||id=='Mg'||id=='Al'||id=='Si'||id=='S'||id=='Ca'||id=='K'||id=='Ti'||id=='Fe'){
                    $scope.wavelengths.push("x-ray");
            }else if(id=='UV'||id=='H'||id=='He'||id=='O'||id=='Na'||id=='Ar'||id=='Ne'||id=='Mg'||id=='Fe'||id=='Si'||id=='S'||id=='Al'){
                    $scope.wavelengths.push("UV");
                    $scope.wavelengths.push("ultraviolet");
            }else if(id=='Visible'||id=='K'||id=='Li'){
                    $scope.wavelengths.push("visible");
            }else if(id=='Near-IR'){
                $scope.wavelengths.push("near-IR");
            }else if(id=='Short-IR'){
                $scope.wavelengths.push("short-IR");
            }else if(id=='Mid-IR'){
                $scope.wavelengths.push("mid-IR");
            } 

        } else {
            $scope.numClicked-=1;
            if( id=='Gamma'||id=='O'||id=='Mg'||id=='Si'||id=='K'||id=='Ti'||id=='Fe'||id=='Th'||id=='U'){
               // document.getElementById(id).style.backgroundColor = "red";
                 if($scope.wavelengths.indexOf("gamma")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("gamma"),1);
                }
            }

            else if(id=='Microwave'){
                if($scope.wavelengths.indexOf("microwave")!=-1){
                    //document.getElementById(id).style.backgroundColor = "red";
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("microwave"),1);
                }
            }

            else if(id=='X-ray'||id=='Na'||id=='Mg'||id=='Al'||id=='Si'||id=='S'||id=='Ca'||id=='K'||id=='Ti'||id=='Fe'){
                if($scope.wavelengths.indexOf("x-ray")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("x-ray"),1);
                }
            }
            else if(id=='UV'||id=='H'||id=='He'||id=='O'||id=='Na'||id=='Ar'||id=='Ne'||id=='Mg'||id=='Fe'||id=='Si'||id=='S'||id=='Al'){
                if($scope.wavelengths.indexOf("UV")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("UV"),1);
                }
                if($scope.wavelengths.indexOf("ultraviolet")!=-1){
                  $scope.wavelengths.splice($scope.wavelengths.indexOf("ultraviolet"),1);
                }
            }
            else if(id=='Visible'||id=='K'||id=='Li'){
                if($scope.wavelengths.indexOf("visible")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("visible"),1);
                }
            }else if(id=='Near-IR'){
                if($scope.wavelengths.indexOf("near-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("near-IR"),1);
                }
            }else if(id=='Short-IR'){
                if($scope.wavelengths.indexOf("short-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("short-IR"),1);
                }
            }else if(id=='Mid-IR'){
                if($scope.wavelengths.indexOf("mid-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("mid-IR"),1);
                }
            }else if(id=='Long-IR'){
                if($scope.wavelengths.indexOf("long-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("long-IR"),1);
                }
            }else if(id=='Far-IR'){
                if($scope.wavelengths.indexOf("far-IR")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("far-IR"),1);
                }
            }else if(id=='Radiowave'){
                if($scope.wavelengths.indexOf("radio")!=-1){
                 $scope.wavelengths.splice($scope.wavelengths.indexOf("radio"),1);
                }
            }

            document.getElementById(id).style.backgroundColor = "#faf2cc";
        }       
    }

   $scope.isSelected = function(id){
        return document.getElementById(id).style.backgroundColor =="blue";
    }

    $scope.searchInstruments=function(instrument){

        for(wavelength in $scope.wavelengths){
            if(Part.Measurement.indexOf(wavelength)!==-1){
                return true;
            }else{
                return false;
            }
        }

    }

    $scope.click=function(){

        return $scope.numClicked!==0||$scope.co2||$scope.hematite||$scope.feldspar||$scope.tiBearing||$scope.oxides||$scope.nitrates||$scope.carbonates||$scope.h2o||$scope.pyroxene||$scope.hematite||$scope.clay||$scope.nitrates||$scope.carbonates||$scope.ch4||$scope.nh3||$scope.pyroxene||$scope.olivine||$scope.hematite||$scope.clay||$scope.phyllosilicate||$scope.nitrates||$scope.ch4||$scope.o3||$scope.pyroxene||$scope.feldspar||$scope.clay||$scope.nitrates||$scope.carbonates||$scope.oxide||$scope.altimetry||$scope.magnetic||$scope.decayParticles||$scope.magnetic||$scope.electrons||$scope.ions||$scope.neutrons||$scope.chChains||$scope.sulfatesites;
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
                // $scope.selectedInstrument = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.nextPage = function() {
            var path = '/tool2?' + idstring;
            window.location = path;   
    };

    $scope.prevPage = function() {
        $http.delete(cubesatPath);
        window.location = '/tool0?'+ idstring;
    };
});