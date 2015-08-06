spaceFrontierApp.controller("powerController", function($scope, $http) {
    var idstring = window.location.search.slice(1);
    var cubesatPath = '/parts/cubesat/' + idstring;
    $scope.showPanels = true;
    $scope.showBatteries = false;
    $scope.showEPS = false;

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

    $scope.parts = [];
    $scope.init = function() { 
        $http.get('/parts/power').then(function(result) { 
            $scope.parts = result.data; 
        });
    }; 
    $scope.init(); 

    $scope.filterSolar = function(part) { 
       if($scope.ignorefilters){
            return part.Type == 'Solar Panels';
       }
       if (!$scope.dep) {
            return part.Type == 'Solar Panels' && $scope.volume == part.Volume;
       } else {
            var ppw = 999;
            if ($scope.ppw == "onePPW"){
                ppw = 1;
            } else if ($scope.ppw == "twoPPW"){
                ppw = 2;
            } else if ($scope.ppw == "threePPW"){
                ppw = 3;
            }
            var wings=999;
            if ($scope.wing == "oneW"){
                wings = 1;
            } else if ($scope.wing == "twoW"){
                wings = 2;
            }
            return part.Type == 'Deployed Solar Panels' && part.PperWing == ppw && part.Wings == wings && $scope.volume == part.Volume;
       }
       return false;

    }; 

    $scope.savePanels = function(part) {
        $scope.selectedPanels = part;
    };

    $scope.saveBatteries = function(part) {
        $scope.selectedBatteries = part;
    };

    $scope.saveEPS = function(part) {
        $scope.selectedEPS = part;
    };

    $scope.addPanels = function() {
        $http.put('/parts/cubesat-panels/' + idstring, $scope.selectedPanels)
            .success(function(data) {
                // $scope.selectedPanels = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.addBatteries = function() {
         $http.put('/parts/cubesat-batteries/' + idstring, $scope.selectedBatteries)
            .success(function(data) {
                // $scope.selectedBatteries = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };

    $scope.nextBat = function() {
        $scope.showPanels = true;
        $scope.showBatteries = true;
        $scope.showEPS = false;
    };

    $scope.nextEPS = function() {
        $scope.showPanels = true;
        $scope.showBatteries = true;
        $scope.showEPS = true;
    };
    
    $scope.addEPS = function() {
        $http.put('/parts/cubesat-eps/' + idstring, $scope.selectedEPS)
            .success(function(data) {
                // $scope.selectedEPS = {}; // clear the form so our user is ready to enter another
            });
        $scope.updateData();
    };


    $scope.filterBattery = function(part) {
        return part.Type=='Battery';
    };

    $scope.filterEPS = function(part) {
        // return part.Type=='Power Control Unit' && part.Volume==$scope.volume;
        return part.Type=='Power Control Unit';
    };

    $scope.nextPage = function() {
        // $http.put('/parts/cubesat-panels/' + idstring, $scope.selectedPanels)
        //     .success(function(data) {
        //         // $scope.selectedPanels = {}; // clear the form so our user is ready to enter another
        //     });
        // $http.put('/parts/cubesat-batteries/' + idstring, $scope.selectedBatteries)
        //     .success(function(data) {
        //         // $scope.selectedBatteries = {}; // clear the form so our user is ready to enter another
        //     });
        // $http.put('/parts/cubesat-eps/' + idstring, $scope.selectedEPS)
        //     .success(function(data) {
        //         // $scope.selectedEPS = {}; // clear the form so our user is ready to enter another
        //     });
        var path = '/tool7?' + idstring;
        window.location = path;    
    };

    $scope.prevPage = function() {
        var path = '/tool5?' + idstring;
        window.location = path; 
    };
});
