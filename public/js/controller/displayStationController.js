spaceFrontierApp.controller("displayStationController", function($scope, $http) {
    $scope.parts = [];
    $scope.newPart = {};

    $scope.init = function() {
		$http.get('/parts/station').then(function(result) { 
			$scope.parts = result.data; 
		});
    };
    $scope.init();

    $scope.predicate = 'Name';
    $scope.reverse = false;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.cancelEdit = function() {
        $scope.edit = false;

        $scope.id = '';
        $scope.name = '';
        $scope.uplink = '';
        $scope.eirp = '';
        $scope.down = '';
        $scope.gain = '';
        $scope.pgain = '';
        $scope.dia = '';
        $scope.loc = '';
        $scope.band = '';
    }

    $scope.openEdit = function(part) {
        window.scrollTo(0, 0);

        $scope.edit = true;

        $scope.id = part._id;
        $scope.name = part.Name;
        $scope.uplink = part.Uplink_freq;
        $scope.eirp = part.EIRP;
        $scope.down = part.Downlink_freq;
        $scope.gain = part.Gain;
        $scope.pgain = part.Per_gain;
        $scope.dia = part.Diameter;
        $scope.loc = part.Loc;
        $scope.band = part.Band;
    }

    $scope.editPart = function() {
        $scope.addPart();
        $scope.deletePart($scope.id);
        $scope.edit = false;
    }

    $scope.addPart = function() {
        $scope.newPart = {
            Name: $scope.name,
            Uplink_freq: $scope.uplink, 
            EIRP: $scope.eirp, 
            Downlink_freq: $scope.down, 
            Gain: $scope.gain, 
            Per_gain: $scope.pgain, 
            Diameter: $scope.dia, 
            Loc: $scope.loc, 
            Band: $scope.band,
        };
        $http.post('/parts/station', $scope.newPart)
            .success(function(data) {
                $scope.id = '';
                $scope.name = '';
                $scope.uplink = '';
                $scope.eirp = '';
                $scope.down = '';
                $scope.gain = '';
                $scope.pgain = '';
                $scope.dia = '';
                $scope.loc = '';
                $scope.band = '';
                $http.get('/parts/station').then(function(result) { 
                    $scope.parts = result.data; 
                });
            });
    };

    $scope.deletePart = function(id) {
        $http.delete('/parts/station/' + id)
            .success(function(data) {
                $http.get('/parts/station').then(function(result) { 
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
        modal.find('.modal-uplink input').val(part.Uplink_freq)
        modal.find('.modal-eirp input').val(part.EIRP)
        modal.find('.modal-eirp-ave input').val(part.EIRP_ave)
        modal.find('.modal-down input').val(part.Downlink_freq)
        modal.find('.modal-gain input').val(part.Gain)
        modal.find('.modal-pergain input').val(part.Per_gain)
        modal.find('.modal-dia input').val(part.Diameter)
        modal.find('.modal-loc input').val(part.Loc)
        modal.find('.modal-band input').val(part.Band)
        modal.find('.modal-coor input').val(part.Coordinates)
    });

    $('#editPartModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var part = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('More Information About: ' + part.Name)
        modal.find('.modal-name input').val(part.Name)
        modal.find('.modal-uplink input').val(part.Uplink_freq)
        modal.find('.modal-eirp input').val(part.EIRP)
        modal.find('.modal-eirp-ave input').val(part.EIRP_ave)
        modal.find('.modal-down input').val(part.Downlink_freq)
        modal.find('.modal-gain input').val(part.Gain)
        modal.find('.modal-pergain input').val(part.Per_gain)
        modal.find('.modal-dia input').val(part.Diameter)
        modal.find('.modal-loc input').val(part.Loc)
        modal.find('.modal-band input').val(part.Band)
        modal.find('.modal-coor input').val(part.Coordinates)
    });

});