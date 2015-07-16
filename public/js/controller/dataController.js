spaceFrontierApp.controller("dataController", function($scope, $http) {
    $scope.showDatabase = false;
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;
    $scope.showCalculate = false;

    $scope.nextCalculate = function() {
        $scope.showCalculate = true;
    }

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

    $scope.nextCDH = function() {
        $scope.showCalculate = true;
        $scope.showDatabase = true;
    };
    
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

    $scope.parts = [];
    $scope.stations = [];

    var bits=0;
    var downlink=0;
    var memory=0;
    var mips=0;


    $scope.tabBPS = function() {
            bits=parseInt($scope.bitssecond);
            $scope.totalbits=bits+"";
             memory=(parseInt($scope.resolution)/100)*86400;
            downlink=bits*memory;
            $scope.totaldownlink=downlink+"";
            if($scope.length==0){
                mips=parseInt($scope.mips)+"";
            }
            $scope.showDatabase = false;
            $scope.showCalculate = true;
    }

    $scope.tabARRAY=function(){
            bits=parseInt($scope.sizex)*parseInt($scope.sizey)*parseInt($scope.integrations2);
            $scope.totalbits=bits+"";
             memory=(parseInt($scope.resolution)/100)*86400;
            downlink=bits*memory;
            $scope.totaldownlink=downlink+"";
            if($scope.length==0){
                mips=parseInt($scope.mips)+"";
            }
            $scope.showDatabase = false;
            $scope.showCalculate = true;
    }

    $scope.tabCHANNELS=function(){
            bits=parseInt($scope.channel)*parseInt($scope.bitschannel)*parseInt($scope.integrations1);
            $scope.totalbits=bits+"";
             memory=(parseInt($scope.resolution)/100)*86400;
            downlink=bits*memory;
            $scope.totaldownlink=downlink+"";
            if($scope.length==0){
                mips=parseInt($scope.mips)+"";
            }
            $scope.showDatabase = false;
            $scope.showCalculate = true;
    }

    $scope.cdhparts = [];
    $scope.init = function() { 
        $http.get('/parts/cdh').then(function(result) { 
            $scope.cdhparts = result.data; 
        });
    } 
    $scope.init(); 

    $scope.savePart = function(part) {
        $scope.selectedPart = part;
    };

    $scope.okType=function(part){
        var okType=false;
        if ($scope.OBC && part.Type == 'On-Board Computer (OBC)'){
            okType = true;
        }
        else if ($scope.bus && part.Type == 'Cubesat Bus'){
            okType = true;
        }
        else if ($scope.imageprocessor && part.Type == 'Image Processor'){
            okType = true;
        }
        return okType;
    };

    $scope.okData=function(part){
        return part.MHz>=bits&&part.MIPS>=mips;
    }

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

    $scope.addPart = function() {
        $http.put('/parts/cubesat-cdh/' + idstring, $scope.selectedPart)
            .success(function(data) {
                $scope.selectedPart = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };
    $scope.nextPage = function() {
        var path = '/tool6?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool4?' + idstring;
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

