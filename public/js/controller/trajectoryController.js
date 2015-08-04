spaceFrontierApp.controller("trajectoryController", function($scope,$http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;
    $scope.showDatabase = false;
    $scope.calculation = false;

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

    $scope.trajectoryparts = [];
    $scope.init = function() { 
        $http.get('/parts/propulsion').then(function(result) { 
            $scope.trajectoryparts = result.data; 
        });
    } 
    $scope.init();

    $scope.loading = false;
    $scope.myClick = function() {
        $scope.showDatabase = true;
    };

    var trajectorydV=0;
    var RA=0;
    var RP=0;
    var P=0;
    var A=0;
    var orbitdV=0;
    var incdV=0;
    var deg=0;
    var avgV=0;
    var partsin=0;
    var vinf=0;
    var vinc=0;
    var vper=0;


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    $scope.okType = function(part) {
        var okType = false;
        if ($scope.Thruster && part.Type == 'Thruster')
        {
            okType = true;
        }
        else if ($scope.Sail && part.Type == 'Sail')
        {
            okType = true;
        }
        return okType;
    };
    $(document).ready(function(){
        // Activate Carousel
        $("#carousel1").carousel({interval: false});
    });

    $scope.tabSPECIFICS = function(part) {
        if ($scope.target=='Moon'){
            RA=parseFloat($scope.apoapsis) + 1738;
            RP=parseFloat($scope.periapsis) + 1738;
            P=(((2*RA)/(RA+RP)) - 1);
            var MuMoon=4903.7194575;
            var MuEarth=398561.7248;
            var vapearth = Math.sqrt(MuEarth*((2/(384400+RP))-(2/((390771+RP)))));
            var vpermoon = Math.sqrt((MuMoon*(((2)/(RP))-((2)/(RA+RP)))));
            if($scope.picktrajectoryRadio2){
                trajectorydV = parseFloat($scope.inputtrajectorydV);
                }
            else{
                if($scope.picktrajectory=="direct"){
                    trajectorydV=1.022;
                }
                else if($scope.picktrajectory == "indirect"){
                    trajectorydV=0.02;
                }
            }  
            orbitdV= Math.abs((vapearth) - (vpermoon));
            avgV= Math.sqrt((MuMoon)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if($scope.target=='Earth Low'){
            RA=parseFloat($scope.apoapsis) + 6371;
            RP=parseFloat($scope.periapsis) + 6371;
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseFloat($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }
            var MuEarth=398561.7248;  
            deg = parseFloat($scope.angle);
            orbitdV=Math.sqrt(MuEarth*((2/(RP))-(2/(RA+RP))));
            avgV= Math.sqrt((MuEarth)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Earth Medium'){
            RA=parseFloat($scope.apoapsis) + 6371;
            RP=parseFloat($scope.periapsis) + 6371;
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseFloat($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }  
            var MuEarth=398561.7248;
            deg = parseFloat($scope.angle);
            orbitdV=Math.sqrt(MuEarth*((2/(RP))-(2/(RA+RP))));
            avgV= Math.sqrt((MuEarth)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Earth High'){
            RA=parseFloat($scope.apoapsis) + 6371;
            RP=parseFloat($scope.periapsis) + 6371;
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseFloat($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }  
            var MuEarth=398561.7248;
            deg = parseFloat($scope.angle);
            orbitdV=Math.sqrt(MuEarth*((2/(RP))-(2/(RA+RP))));
            avgV= Math.sqrt((MuEarth)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Mercury'){
            RA=parseFloat($scope.apoapsis) + 2440;
            RP=parseFloat($scope.periapsis) + 2440;
            P=(((2*RA)/(RA+RP)) - 1);
            var MuMercury = 21923.5644;
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseFloat($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=17.58;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=2.00;
                    }
                }  
            vper = Math.sqrt(MuMercury*((2/(RP))-(2/(RA+RP))));
            vinf = trajectorydV;
            vinc = Math.sqrt((Math.pow(vinf, 2))+(2*MuMercury/(RP)));
            deg = parseFloat($scope.angle);
            orbitdV= Math.abs(vinc - vper);
            avgV= Math.sqrt((MuMercury)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Mars'){
            RA=parseFloat($scope.apoapsis) + 3390;
            RP=parseFloat($scope.periapsis) + 3390;
            P=(((2*RA)/(RA+RP)) - 1);
            var MuMars= 42645.8376;
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseFloat($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=5.71;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=2.00;
                    }
                }  
            vper = Math.sqrt(MuMars*2*(RA)/(RP*(RA+RP)));
            vinf = trajectorydV;
            vinc = Math.sqrt((Math.pow(vinf, 2))+(2*MuMars/(RP)));
            deg = parseFloat($scope.angle);
            orbitdV= Math.abs(vinc - vper);
            avgV= Math.sqrt((MuMars)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Venus'){
            RA=parseFloat($scope.apoapsis) + 6052;
            RP=parseFloat($scope.periapsis) + 6052;
            P=(((2*RA)/(RA+RP)) - 1);
            var MuVenus = 324815.7928;
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseFloat($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=5.24;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=2.00;
                    }
                }  
            vper = Math.sqrt(MuVenus*2*(RA)/(RP*(RA+RP)));
            vinf = trajectorydV;
            vinc = Math.sqrt((Math.pow(vinf, 2))+(2*MuVenus/(RP)));
            deg = parseFloat($scope.angle);
            orbitdV= Math.abs(vinc - vper);
            avgV= Math.sqrt((MuVenus)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        dV = trajectorydV + orbitdV +incdV;
        $scope.totaldV=dV;
        $scope.calculation = true;
    };
    
    $scope.tabOWN = function(part){
        dV = $scope.inputown;
        $scope.totaldV=dV+"";
        $scope.showDatabase = true;
        
    };

    $scope.okdV = function(part) {
        if ($scope.ignorefilters){
            return true;
        }
        
        dV = parseInt($scope.totaldV);
        if(part.DeltaV!='Unknown'){
            return part.parseInt(DeltaV) >= dV;
        }

        return false;
    };

    $scope.savePart = function(part) {
        $scope.selectedPart = part;
    };

    $scope.addPart = function() {
        $http.put('/parts/cubesat-propulsion/' + idstring, $scope.selectedPart)
            .success(function(data) {
                // $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            })
        $scope.updateData();
    };

    $scope.nextPage = function() {
        var path = '/tool4?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool2?' + idstring;
        window.location = path; 
    };
});

$(function () {
      $('[data-toggle="popover"]').popover()
      setTimeout(function(){
        $('[data-toggle="popover"]').popover('hide');
      }, 9000);
});

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
