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
            Power: $scope.power, 
            Volume: $scope.vol, 
            Proportions: $scope.prop, 
            MIPS: $scope.mips, 
            MHz: $scope.mhz, 
            Processing_further: $scope.proc, 
            Memory: $scope.mem, 
            Scientific_obj: $scope.sci,
            Additional_info: $info, 
            Cost: "0"
        };
        $http.post('/parts/cdh', $scope.newPart)
            .success(function(data) {
                $scope.type = ''; 
                $scope.name = ''; 
                $scope.manu = ''; 
                $scope.ref = '';
                $scope.her = '';
                $scope.mass = '';
                $scope.power = '';
                $scope.vol = '';
                $scope.prop = '';
                $scope.mips = '';
                $scope.mhz = '';
                $scope.proc = '';
                $scope.mem = '';
                $scope.sci = '';
                $scope.info = '';
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
        modal.find('.modal-power input').val(part.Power)
        modal.find('.modal-vol input').val(part.Volume)
        modal.find('.modal-prop input').val(part.Proportions)
        modal.find('.modal-mips input').val(part.MIPS)
        modal.find('.modal-mhz input').val(part.MHz)
        modal.find('.modal-proc input').val(part.Processing_further)
        modal.find('.modal-mem input').val(part.Memory)
        modal.find('.modal-sci input').val(part.Scientific_obj)
        modal.find('.modal-cost input').val(part.Cost)
        modal.find('.modal-info input').val(part.Additional_info)
        modal.find('.modal-id input').val(part._id)
    });
});