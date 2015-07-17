spaceFrontierApp.controller("displayCdhController", function($scope, $http) {
  	$scope.parts = [];
    $scope.newPart = {};
    $scope.editNewPart = {};

    $scope.init = function() { 
		$http.get('/parts/cdh').then(function(result) { 
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
            MIPS: $scope.mips, 
            MHz: $scope.mhz, 
            Processing_further: $scope.proc, 
            Memory: $scope.mem, 
            Temp_low: $scope.low, 
            Temp_high: $scope.high, 
            Scientific_obj: $scope.sci, 
            Cost: 0
        };
        $http.post('/parts/cdh', $scope.newPart)
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
                $scope.mips = '';
                $scope.mhz = '';
                $scope.proc = '';
                $scope.mem = '';
                $scope.low = '';
                $scope.high = '';
                $scope.sci = '';
                $http.get('/parts/cdh').then(function(result) { 
                    $scope.parts = result.data; 
                });
        });
    };

    $scope.deletePart = function(id) {
        $http.delete('/parts/cdh/' + id)
            .success(function(data) {
                $http.get('/parts/cdh').then(function(result) { 
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
        modal.find('.modal-mips input').val(part.MIPS)
        modal.find('.modal-mhz input').val(part.Mhz)
        modal.find('.modal-proc input').val(part.Processing_further)
        modal.find('.modal-mem input').val(part.Memory)
        modal.find('.modal-low input').val(part.Temp_low)
        modal.find('.modal-high input').val(part.Temp_high)
        modal.find('.modal-sci input').val(part.Scientific_obj)
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
        modal.find('.modal-mips input').val(part.MIPS)
        modal.find('.modal-mhz input').val(part.Mhz)
        modal.find('.modal-proc input').val(part.Processing_further)
        modal.find('.modal-mem input').val(part.Memory)
        modal.find('.modal-low input').val(part.Temp_low)
        modal.find('.modal-high input').val(part.Temp_high)
        modal.find('.modal-sci input').val(part.Scientific_obj)
        modal.find('.modal-cost input').val(part.Cost)
        modal.find('.modal-id input').val(part._id)
    });
    
});