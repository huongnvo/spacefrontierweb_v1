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

    $scope.cancelEdit = function() {
        $scope.edit = false;

        $scope.id = '';
        $scope.type = '';
        $scope.name = '';
        $scope.manu = '';
        $scope.ref = '';
        $scope.def = '';
        $scope.mass = '';
        $scope.power = '';
        $scope.vol = '';
        $scope.prop = '';
        $scope.eff = '';
        $scope.obj = '';
        $scope.ener = '';
        $scope.pper = '';
        $scope.wings= '';     
    }

    $scope.openEdit = function(part) {
        window.scrollTo(0, 0);

        $scope.edit = true;

        $scope.id = part._id;
        $scope.type = part.Type;
        $scope.name = part.Name;
        $scope.manu = part.Manufacturer;
        $scope.ref = part.Reference;
        $scope.def = part.Description;
        $scope.mass = part.Mass;
        $scope.power = part.Power;
        $scope.vol = part.Volume;
        $scope.prop = part.Proportions;
        $scope.eff = part.Efficiency;
        $scope.obj = part.Objectives;
        $scope.ener = part.Energy_Storage;
        $scope.pper = part.PperWing;
        $scope.wings = part.Wings;
    }

    $scope.editPart = function() {
        $scope.addPart();
        $scope.deletePart($scope.id);
        $scope.edit = false;
    }

    $scope.addPart = function() {
        $scope.newPart = {
            Type: $scope.type,
            Name: $scope.name,
            Manufacturer: $scope.manu,
            Reference: $scope.ref,
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
                $scope.id = '';
                $scope.type = '';
                $scope.name = '';
                $scope.manu = '';
                $scope.ref = '';
                $scope.def = '';
                $scope.mass = '';
                $scope.power = '';
                $scope.vol = '';
                $scope.prop = '';
                $scope.eff = '';
                $scope.obj = '';
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
            .then(function(result) {
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
