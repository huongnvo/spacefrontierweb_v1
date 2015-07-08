spaceFrontierApp.controller("displayAttitudeController", function($scope, $http) {
    $scope.parts = {};
    $scope.newPart = {};
    $scope.editNewPart = {};

    $scope.init = function() { 
        $http.get('/parts/attitude').then(function(result) { 
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
            Type_further: $scope.typecont,
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
            Angle_prec: $scope.angle,
            Attitude_control_further: $scope.att,
            Ac_sensors: $scope.ac,
            Scientific_obj: $scope.sci,
            Venue: $scope.ven,
            Temp_low: $scope.low,
            Temp_high: $scope.high,
            Datarate: $scope.datarate,
            Cost: 0
        };
        $http.post('/parts/attitude', $scope.newPart)
            .success(function(data) {
                $scope.newPart = {}; // clear the form so our user is ready to enter another
            })
    }

    $scope.deletePart = function(id) {
        $http.delete('/parts/attitude/' + id)
    }

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var part = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('More Information About: ' + part.Name)
        modal.find('.modal-name input').val(part.Name)
        modal.find('.modal-type input').val(part.Type)
        modal.find('.modal-type-further input').val(part.Type_further)
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
        modal.find('.modal-ang input').val(part.Angle_prec)
        modal.find('.modal-att input').val(part.Attitude_control_further)
        modal.find('.modal-ac input').val(part.Ac_sensors)
        modal.find('.modal-sci input').val(part.Scientific_obj)
        modal.find('.modal-ven input').val(part.Venue)
        modal.find('.modal-low input').val(part.Temp_low)
        modal.find('.modal-high input').val(part.Temp_high)
        modal.find('.modal-data input').val(part.Datarate)
        modal.find('.modal-cost input').val(part.Cost)
        modal.find('.modal-id input').val(part._id)
    });

    $('#editPartModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var part = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('Edit Part: ' + part.Name)
        modal.find('.modal-name input').val(part.Name)
        modal.find('.modal-type input').val(part.Type)
        modal.find('.modal-type-further input').val(part.Type_further)
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
        modal.find('.modal-ang input').val(part.Angle_prec)
        modal.find('.modal-att input').val(part.Attitude_control_further)
        modal.find('.modal-ac input').val(part.Ac_sensors)
        modal.find('.modal-sci input').val(part.Scientific_obj)
        modal.find('.modal-ven input').val(part.Venue)
        modal.find('.modal-low input').val(part.Temp_low)
        modal.find('.modal-high input').val(part.Temp_high)
        modal.find('.modal-data input').val(part.Datarate)
        modal.find('.modal-cost input').val(part.Cost)
        modal.find('.modal-id input').val(part._id)
    });
    
});