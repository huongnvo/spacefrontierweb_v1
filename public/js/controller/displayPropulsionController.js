spaceFrontierApp.controller("displayPropulsionController", function($scope, $http) {
    $scope.parts = [];
    $scope.newPart = {};
    $scope.admin = false;

    var token = window.location.search.slice(1);

    $scope.remove = function() {
        $scope.notAdmin = false;
    }

    $scope.decode = function() {
        var payload = token.split('=')[1];
        var base64Url = payload.split('.')[1];
        var output = JSON.parse(atob(base64Url));
        $scope.name = output.name;
        $scope.email = output.email;
        $scope.admin = output.admin;
    };
    $scope.decode();

    $scope.backMain = function() {
        var newPath = '/listAdmin?' + token;
        window.location = newPath;    
    };

    $scope.init = function() { 
        $http.get('/parts/propulsion').then(function(result) { 
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
        $scope.her = '';
        $scope.mass = '';
        $scope.power = '';
        $scope.vol = '';
        $scope.prop = '';
        $scope.isp = '';
        $scope.dv = '';
        $scope.obj = '';
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
        $scope.isp = part.Specific_Impulse;
        $scope.dv = part.DeltaV;
        $scope.obj = part.Objectives;
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
            Specific_Impulse: $scope.isp,
            DeltaV: $scope.dv,
            Objectives: $scope.obj,
            Cost: 0
        };
        if ($scope.admin) {
            $http.put('/parts/propulsion/' + $scope.id + '?' + token, $scope.newPart)
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
                    $scope.isp = '';
                    $scope.dv = '';
                    $scope.obj = '';
                    $http.get('/parts/propulsion').then(function(result) { 
                        $scope.parts = result.data; 
                    });
                    $scope.edit = false;
            });  
        } else {
            $scope.notAdmin = true;
            $scope.message = 'You do not have permission to edit this item';
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
            $scope.isp = '';
            $scope.dv = '';
            $scope.obj = '';
            $scope.edit = false;
        }     
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
            Specific_Impulse: $scope.isp,
            DeltaV: $scope.dv,
            Objectives: $scope.obj,
            Cost: 0
        };
        $http.post('/parts/propulsion' + '?' + token, $scope.newPart)
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
                $scope.isp = '';
                $scope.dv = '';
                $scope.obj = '';
                $http.get('/parts/propulsion').then(function(result) { 
                    $scope.parts = result.data; 
                });
        });
    };

    $scope.deletePart = function(id) {
        if ($scope.admin) {
            $http.delete('/parts/propulsion/' + id + '?' + token)
                .success(function(data) {
                    $http.get('/parts/propulsion').then(function(result) { 
                        $scope.parts = result.data; 
                    });
            });
        } else {
            $scope.notAdmin = true;
            $scope.message = 'You do not have permission to delete this item';
        }
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
        modal.find('.modal-isp input').val(part.Specific_Impulse)
        modal.find('.modal-dv input').val(part.DeltaV)
        modal.find('.modal-obj input').val(part.Objectives)
    });

});