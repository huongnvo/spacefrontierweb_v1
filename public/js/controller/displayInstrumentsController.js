spaceFrontierApp.controller("displayInstrumentsController", function($scope, $http) {
    $scope.parts = [];
    $scope.newPart = {};

    $scope.init = function() { 
		$http.get('/parts/instruments').then(function(result) { 
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
            Reference: $scope.ref,
            Heritage: $scope.her,
            Mass: $scope.mass, 
            Mass_further: $scope.masscont,
            Power: $scope.power, 
            Power_further: $scope.powercont,
            Volume: $scope.vol,
            Proportions: $scope.prop,
            Volume_further: $scope.volcont,
            Measurement: $scope.meas,
            Sensitivity: $scope.sens,
            Resolution: $scope.res,
            Pixels: $scope.pix,
            Objectives: $scope.obj,
            Venue: $scope.ven,
            FOV: $scope.fov, 
            T_lo: $scope.low, 
            T_hi: $scope.high, 
            Thermal_further: $scope.therm,
            Datarate: $scope.data, 
            Cost: 0
        };
        $http.post('/parts/instruments', $scope.newPart)
            .success(function(data) {
                $scope.type = '';
                $scope.name = '';
                $scope.manu = '';
                $scope.ref = '';
                $scope.her = '';
                $scope.mass = '';
                $scope.masscont = '';
                $scope.power = '';
                $scope.powercont = '';
                $scope.vol = '';
                $scope.prop = '';
                $scope.volcont = '';
                $scope.meas = '';
                $scope.sens = '';
                $scope.res = '';
                $scope.pix = '';
                $scope.obj = '';
                $scope.ven = '';
                $scope.fov = '';
                $scope.low = '';
                $scope.high = '';
                $scope.therm = '';
                $scope.data = '';       
                $http.get('/parts/instruments').then(function(result) { 
                    $scope.parts = result.data; 
                });
            });
    };

    $scope.deletePart = function(id) {
        $http.delete('/parts/instruments/' + id)
            .success(function(data) {
                $http.get('/parts/instruments').then(function(result) { 
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
        modal.find('.modal-her input').val(part.Heritage)
        modal.find('.modal-mass input').val(part.Mass)
        modal.find('.modal-mass-further input').val(part.Mass_further)
        modal.find('.modal-power input').val(part.Power)
        modal.find('.modal-power-further input').val(part.Power_further)
        modal.find('.modal-vol input').val(part.Volume)
        modal.find('.modal-prop input').val(part.Proportions)
        modal.find('.modal-vol-further input').val(part.Volume_further)
        modal.find('.modal-meas input').val(part.Measurement)
        modal.find('.modal-sens input').val(part.Sensitivity)
        modal.find('.modal-res input').val(part.Resolution)
        modal.find('.modal-pix input').val(part.Pixels)
        modal.find('.modal-obj input').val(part.Objectives)
        modal.find('.modal-ven input').val(part.Venue)
        modal.find('.modal-fov input').val(part.FOV)
        modal.find('.modal-low input').val(part.T_lo)
        modal.find('.modal-high input').val(part.T_hi)
        modal.find('.modal-therm input').val(part.Thermal_further)
        modal.find('.modal-data input').val(part.Datarate)
    });

    $('#editPartModal').on('show.bs.modal', function (event) {
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
        modal.find('.modal-her input').val(part.Heritage)
        modal.find('.modal-mass input').val(part.Mass)
        modal.find('.modal-mass-further input').val(part.Mass_further)
        modal.find('.modal-power input').val(part.Power)
        modal.find('.modal-power-further input').val(part.Power_further)
        modal.find('.modal-vol input').val(part.Volume)
        modal.find('.modal-prop input').val(part.Proportions)
        modal.find('.modal-vol-further input').val(part.Volume_further)
        modal.find('.modal-meas input').val(part.Measurement)
        modal.find('.modal-sens input').val(part.Sensitivity)
        modal.find('.modal-res input').val(part.Resolution)
        modal.find('.modal-pix input').val(part.Pixels)
        modal.find('.modal-obj input').val(part.Objectives)
        modal.find('.modal-ven input').val(part.Venue)
        modal.find('.modal-fov input').val(part.FOV)
        modal.find('.modal-low input').val(part.T_lo)
        modal.find('.modal-high input').val(part.T_hi)
        modal.find('.modal-therm input').val(part.Thermal_further)
        modal.find('.modal-data input').val(part.Datarate)
    });
});