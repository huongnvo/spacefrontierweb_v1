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
        // var inputspecifics, inputown = 0
        // if($scope.inputoptionOne){
        //     var inputspecifics = $scope.inputtrajectorydV;
        // }
        // if($scope.inputoptionTwo) {
        //     var inputown = $scope.inputown;
        // }
        // var dV = inputown + inputspecifics;
        // $scope.totaldV = dV;
        $scope.showDatabase = true;
    };

    var EarthMass=5973600000000000000000000;
    var MercuryMass=328500000000000000000000;
    var MarsMass=639000000000000000000000;
    var VenusMass=4867000000000000000000000;
    var MoonMass=73467209000000000000000;
    var G=0.0000000000667384;
    var M=0;
    var MoonDirect=0.5;
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

    $(function () {
        $(".carousel").carousel({ interval: false });
    });

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

    $scope.tabSPECIFICS = function(part) {
        if ($scope.target=='Moon'){
            RA=parseInt($scope.apoapsis);
            RP=parseInt($scope.periapsis);
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseInt($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0.5;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0.02;
                    }
                }  
            M = MoonMass;
            deg = parseInt($scope.angle);
            orbitdV= Math.sqrt((2*M*G)/(RP+515.5)) - Math.sqrt(((2*M*G)*(1+P))/((RA+RP)*(1-P)));
            avgV= Math.sqrt((2*M*G)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if($scope.target=='Earth_Low'){
            RA=parseInt($scope.apoapsis);
            RP=parseInt($scope.periapsis);
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseInt($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }  
            M = EarthMass;
            deg = parseInt($scope.angle);
            orbitdV= Math.sqrt((2*M*G)/(RP+1760.3)) - Math.sqrt(((2*M*G)*(1+P))/((RA+RP)*(1-P)));
            avgV= Math.sqrt((2*M*G)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Earth_Medium'){
            RA=parseInt($scope.apoapsis);
            RP=parseInt($scope.periapsis);
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseInt($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }  
            M = EarthMass;
            deg = parseInt($scope.angle);
            orbitdV= Math.sqrt((2*M*G)/(RP+1760.3)) - Math.sqrt(((2*M*G)*(1+P))/((RA+RP)*(1-P)));
            avgV= Math.sqrt((2*M*G)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Earth_High'){
            RA=parseInt($scope.apoapsis);
            RP=parseInt($scope.periapsis);
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseInt($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }  
            M = EarthMass;
            deg = parseInt($scope.angle);
            orbitdV= Math.sqrt((2*M*G)/(RP+1760.3)) - Math.sqrt(((2*M*G)*(1+P))/((RA+RP)*(1-P)));
            avgV= Math.sqrt((2*M*G)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Mercury'){
            RA=parseInt($scope.apoapsis);
            RP=parseInt($scope.periapsis);
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseInt($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }  
            M = MercuryMass;
            deg = parseInt($scope.angle);
            orbitdV= Math.sqrt((2*M*G)/(RP+795.15)) - Math.sqrt(((2*M*G)*(1+P))/((RA+RP)*(1-P)));
            avgV= Math.sqrt((2*M*G)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Mars'){
            RA=parseInt($scope.apoapsis);
            RP=parseInt($scope.periapsis);
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseInt($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }  
            M = MarsMass;
            deg = parseInt($scope.angle);
            orbitdV= Math.sqrt((2*M*G)/(RP+1074.4)) - Math.sqrt(((2*M*G)*(1+P))/((RA+RP)*(1-P)));
            avgV= Math.sqrt((2*M*G)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        else if ($scope.target=='Venus'){
            RA=parseInt($scope.apoapsis);
            RP=parseInt($scope.periapsis);
            P=(((2*RA)/(RA+RP)) - 1);
                if($scope.picktrajectoryRadio2){
                trajectorydV = parseInt($scope.inputtrajectorydV);
                }
                else{
                    if($scope.picktrajectory=="direct"){
                        trajectorydV=0;
                     }
                    else if($scope.picktrajectory == "indirect"){
                        trajectorydV=0;
                    }
                }  
            M = VenusMass;
            deg = parseInt($scope.angle);
            orbitdV= Math.sqrt((2*M*G)/(RP+1902.8)) - Math.sqrt(((2*M*G)*(1+P))/((RA+RP)*(1-P)));
            avgV= Math.sqrt((2*M*G)*(1+Math.pow(P,2))/((RA+RP)*(1-Math.pow(P,2))));
            partsin=Math.sin((deg)/2);
            incdV = 2*avgV*partsin;
        }
        dV = incdV + trajectorydV + orbitdV;
        $scope.totaldV=dV+"";
        $scope.calculation = true;
        // return part.DeltaV >= dV;
    };
    
    $scope.tabOWN = function(part){
        dV = $scope.inputown;
        $scope.totaldV=dV+"";
        $scope.calculation = true;
        // return part.DeltaV >= dV;
    };

    $scope.okdV = function(part) {
        // if($scope.picktrajectoryRadio2){
        //   trajectorydV = $scope.inputtrajectorydV;
        // }
        // RA=$scope.apoapsis;
        // RP=$scope.periapsis;
        // E= (2*RA/(RA+RP)) + 1;
        // if($scope.target == "Moon") {
        //   M = MoonMass;
        //   orbitdV= Math.sqrt(2*M*G/RA) - Math.sqrt(2*M*G*(1+E)/((RA+RP)*(1-E)));
        // }
        dV = parseInt($scope.totaldV);
        return part.DeltaV >= dV;
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