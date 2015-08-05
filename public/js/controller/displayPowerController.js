spaceFrontierApp.controller("displayPowerController", function($scope, $http) {
    $scope.parts = [];
    $scope.newPart = {};

    $scope.init = function() { 
		$http.get('/parts/power').then(function(result) { 
			$scope.parts = result.data; 
		});
    } 
    $scope.init(); 

    $scope.predicate = 'Manufacturer';
    $scope.reverse = false;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.addPart = function() {
        $scope.newPart = {
            Type: $scope.type,
            Name: $scope.name,
            Manufacturer: $scope.manu,
            Website: $scope.ref,
            Description: $scope.def,
            Mass: $scope.mass,
            Power: $scope.power,
            Volume: $scope.vol,
            Proportions: $scope.prop,
            Efficiency: $scope.eff,
            Objectives: $scope.obj,
            Energy_Storage: $scope.ener,
            PperWing: $scope.pper,
            Wings: $scope.wings,
            Cost: "0",
            Additional_info: ""
        };
        $http.post('/parts/power', $scope.newPart)
            .success(function(data) {
                $scope.type = '';
                $scope.name = '';
                $scope.manu = '';
                $scope.ref = '';
                $scope.def = '';
                $scope.mass = '';
                $scope.masscont = '';
                $scope.power = '';
                $scope.powercont = '';
                $scope.vol = '';
                $scope.prop = '';
                $scope.volcont = '';
                $scope.eff = '';
                $scope.obj = '';
                $scope.therm = '';
                $scope.low = '';
                $scope.high = '';
                $scope.ener = '';
                $scope.pper = '';
                $scope.wings= '';        
                $http.get('/parts/power').then(function(result) { 
                    $scope.parts = result.data; 
                });
            });
    };

    $scope.deletePart = function(id) {
        $http.delete('/parts/power/' + id)
            .success(function(data) {
                $http.get('/parts/power').then(function(result) { 
                    $scope.parts = result.data; 
                });
            });
    };

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var part = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('More Information About: ' + part.Name)
        modal.find('.modal-name input').val(part.Name)
        modal.find('.modal-type input').val(part.Type)
        modal.find('.modal-manu input').val(part.Manufacturer)
        modal.find('.modal-ref input').val(part.Reference)
        modal.find('.modal-def input').val(part.Description)
        modal.find('.modal-mass input').val(part.Mass)
        modal.find('.modal-power input').val(part.Power)
        modal.find('.modal-vol input').val(part.Volume)
        modal.find('.modal-prop input').val(part.Proportions)
        modal.find('.modal-eff input').val(part.Efficiency)
        modal.find('.modal-obj input').val(part.Objectives)
        modal.find('.modal-ener input').val(part.Energy_Storage)
        modal.find('.modal-pper input').val(part.PperWing)
        modal.find('.modal-wing input').val(part.Wings)
    });
});
