spaceFrontierApp.controller("displayCommController", function($scope, $http) {
    $scope.parts = [];
    $scope.newPart = {};

    var token = window.location.search.slice(1);

    $scope.backMain = function() {
        var newPath = '/listAdmin?' + token;
        window.location = newPath;    
    };

    $scope.init = function() {
		$http.get('/parts/comm').then(function(result) { 
			$scope.parts = result.data; 
		});
    };
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
        $scope.her = '';
        $scope.mass = '';
        $scope.power = '';
        $scope.vol = '';
        $scope.prop = '';
        $scope.freq = '';
        $scope.data = '';
        $scope.rec = '';
        $scope.transmit = '';
        $scope.band = '';
        $scope.gain = '';
    }

    $scope.openEdit = function(part) {
        window.scrollTo(0, 0);

        $scope.edit = true;

        $scope.id = part._id;
        $scope.type = part.Type;
        $scope.name = part.Name;
        $scope.manu = part.Manufacturer;
        $scope.ref = part.Reference;
        $scope.her = part.Heritage;
        $scope.mass = part.Mass;
        $scope.power = part.Power;
        $scope.vol = part.Volume;
        $scope.prop = part.Proportions;
        $scope.freq = part.Frequency;
        $scope.data = part.Data_and_Objectives;
        $scope.rec = part.Receiver_Sensitivity;
        $scope.transmit = part.Transmit_Power;
        $scope.band = part.Beamwidth;
        $scope.gain = part.Gain;
    }

    $scope.editPart = function() {
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
            Frequency: $scope.freq,
            Data_and_Objectives: $scope.data,
            Receiver_Sensitivity: $scope.rec,
            Transmit_Power: $scope.transmit,
            Beamwidth: $scope.band,
            Gain: $scope.gain,
            Cost: "0"
        };
        $http.put('/parts/comm/' + $scope.id + '?' + token, $scope.newPart)
            .success(function(data) {
                $scope.id = '';
                $scope.type = '';
                $scope.name = '';
                $scope.manu = '';
                $scope.ref = '';
                $scope.her = '';
                $scope.mass = '';
                $scope.power = '';
                $scope.vol = '';
                $scope.prop = '';
                $scope.freq = '';
                $scope.data = '';
                $scope.rec = '';
                $scope.transmit = '';
                $scope.band = '';
                $scope.gain = '';
                $http.get('/parts/comm').then(function(result) { 
                    $scope.parts = result.data; 
                });
        });
        $scope.edit = false;
    }

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
            Frequency: $scope.freq,
            Data_and_Objectives: $scope.data,
            Receiver_Sensitivity: $scope.rec,
            Transmit_Power: $scope.transmit,
            Beamwidth: $scope.band,
            Gain: $scope.gain,
            Cost: "0"
        };
        $http.post('/parts/comm' + '?' + token, $scope.newPart)
            .success(function(data) {
                $scope.id = '';
                $scope.type = '';
                $scope.name = '';
                $scope.manu = '';
                $scope.ref = '';
                $scope.her = '';
                $scope.mass = '';
                $scope.power = '';
                $scope.vol = '';
                $scope.prop = '';
                $scope.freq = '';
                $scope.data = '';
                $scope.rec = '';
                $scope.transmit = '';
                $scope.band = '';
                $scope.gain = '';
                $http.get('/parts/comm').then(function(result) { 
                    $scope.parts = result.data; 
                });
            });
    };

    $scope.deletePart = function(id) {
        $http.delete('/parts/comm/' + id + '?' + token)
            .success(function(data) {
                $http.get('/parts/comm').then(function(result) { 
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
        modal.find('.modal-freq input').val(part.Frequency)
        modal.find('.modal-data input').val(part.Data_and_Objectives)
        modal.find('.modal-receiver input').val(part.Receiver_Sensitivity)
        modal.find('.modal-transmit input').val(part.Transmit_Power)
        modal.find('.modal-beam input').val(part.Beamwidth)
        modal.find('.modal-gain input').val(part.Gain)        
    });

});