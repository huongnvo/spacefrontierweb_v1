spaceFrontierApp.controller("displayAttitudeController", function($scope, $http) {
    $scope.parts = {};
    $scope.newPart = {};
    $scope.notAdmin = false;

    var token = window.location.search.slice(1);

    $scope.remove = function() {
        $scope.notAdmin = false;
    }

    $scope.logOutHome = function() {
        swal({
            title: "Are you sure?",
            text: "This will log you out of the current session.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Log Out",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location = "/home";
            } else {
                swal("Cancelled", "You will remain logged in.", "success");
            }
        });
    };

    $scope.logOutTool = function() {
        swal({
            title: "Are you sure?",
            text: "This will log you out of the current session.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Log Out",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location = "/tool";
            } else {
                swal("Cancelled", "You will remain logged in.", "success");
            }
        });
    };

    $scope.logOutAbout = function() {
        swal({
            title: "Are you sure?",
            text: "This will log you out of the current session.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Log Out",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location = "/about";
            } else {
                swal("Cancelled", "You will remain logged in.", "success");
            }
        });
    };

    $scope.logOutParts = function() {
        swal({
            title: "Are you sure?",
            text: "This will log you out of the current session.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Log Out",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location = "/partslist";
            } else {
                swal("Cancelled", "You will remain logged in.", "success");
            }
        });
    };

    $scope.decode = function() {
        if (token != '') {
            var payload = token.split('=')[1];
            var base64Url = payload.split('.')[1];
            var output = JSON.parse(atob(base64Url));
            $scope.name = output.name;
            $scope.email = output.email;
            $scope.admin = output.admin;
        }
    };
    $scope.decode();

    $scope.backMain = function() {
        var newPath = '/listAdmin?' + token;
        window.location = newPath;    
    };

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

    $scope.cancelEdit = function() {
        $scope.edit = false;

        $scope.id = '';
        $scope.type = '';
        $scope.typecont = '';
        $scope.name = '';
        $scope.manu = '';
        $scope.ref = '';
        $scope.her = '';
        $scope.mass = '';
        $scope.power = '';
        $scope.vol = '';
        $scope.prop = '';
        $scope.angle = '';
        $scope.ac = '';
        $scope.sci = '';
    }

    $scope.openEdit = function(part) {
        window.scrollTo(0, 0);

        $scope.edit = true;

        $scope.id = part._id;
        $scope.type = part.Type;
        $scope.typecont = part.Type_further;
        $scope.name = part.Name;
        $scope.manu = part.Manufacturer;
        $scope.ref = part.Reference;
        $scope.her = part.Heritage;
        $scope.mass = part.Mass;
        $scope.power = part.Power;
        $scope.vol = part.Volume;
        $scope.prop = part.Proportions;
        $scope.angle = part.Angle_prec;
        $scope.ac = part.Ac_sensors;
        $scope.sci = part.Scientific_obj;
    }

    $scope.editPart = function() {
        $scope.newPart = {
            Type: $scope.type,
            Type_further: $scope.typecont,
            Name: $scope.name,
            Manufacturer: $scope.manu,
            Reference: $scope.ref,
            Heritage: $scope.her,
            Mass: $scope.mass,
            Power: $scope.power,
            Volume: $scope.vol,
            Proportions: $scope.prop,
            Angle_prec: $scope.angle,
            Ac_sensors: $scope.ac,
            Scientific_obj: $scope.sci,
            Cost: "0"
        };
        if ($scope.admin) {
            $http.put('/parts/attitude/' + $scope.id + '?' + token, $scope.newPart)
                .success(function(data) {
                    $scope.id = '';
                    $scope.type = '';
                    $scope.typecont = '';
                    $scope.name = '';
                    $scope.manu = '';
                    $scope.ref = '';
                    $scope.her = '';
                    $scope.mass = '';
                    $scope.power = '';
                    $scope.vol = '';
                    $scope.prop = '';
                    $scope.angle = '';
                    $scope.ac = '';
                    $scope.sci = '';
                    $http.get('/parts/attitude').then(function(result) { 
                        $scope.parts = result.data; 
                    });
                    $scope.edit = false;  

            });
        } else {
            $scope.notAdmin = true;
            $scope.message = 'You do not have permission to edit this item';
            $scope.id = '';
            $scope.type = '';
            $scope.typecont = '';
            $scope.name = '';
            $scope.manu = '';
            $scope.ref = '';
            $scope.her = '';
            $scope.mass = '';
            $scope.power = '';
            $scope.vol = '';
            $scope.prop = '';
            $scope.angle = '';
            $scope.ac = '';
            $scope.sci = '';
            $scope.edit = false;  
        }  
    }

    $scope.addPart = function() {
        $scope.newPart = {
            Type: $scope.type,
            Type_further: $scope.typecont,
            Name: $scope.name,
            Manufacturer: $scope.manu,
            Reference: $scope.ref,
            Heritage: $scope.her,
            Mass: $scope.mass,
            Power: $scope.power,
            Volume: $scope.vol,
            Proportions: $scope.prop,
            Angle_prec: $scope.angle,
            Ac_sensors: $scope.ac,
            Scientific_obj: $scope.sci,
            Cost: "0"
        };
        $http.post('/parts/attitude' + '?' + token, $scope.newPart)
            .success(function(data) {
                $scope.id = '';
                $scope.type = '';
                $scope.typecont = '';
                $scope.name = '';
                $scope.manu = '';
                $scope.ref = '';
                $scope.her = '';
                $scope.mass = '';
                $scope.power = '';
                $scope.vol = '';
                $scope.prop = '';
                $scope.angle = '';
                $scope.ac = '';
                $scope.sci = '';
                $http.get('/parts/attitude').then(function(result) { 
                    $scope.parts = result.data; 
                });
        });
    };

    $scope.deletePart = function(id) {
        if ($scope.admin) {
            $http.delete('/parts/attitude/' + id + '?' + token)
                .success(function(data) {
                    $http.get('/parts/attitude').then(function(result) { 
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
        modal.find('.modal-type-further input').val(part.Type_further)
        modal.find('.modal-manu input').val(part.Manufacturer)
        modal.find('.modal-ref input').val(part.Reference)
        modal.find('.modal-her input').val(part.Heritage)
        modal.find('.modal-mass input').val(part.Mass)
        modal.find('.modal-power input').val(part.Power)
        modal.find('.modal-vol input').val(part.Volume)
        modal.find('.modal-prop input').val(part.Proportions)
        modal.find('.modal-ang input').val(part.Angle_prec)
        modal.find('.modal-ac input').val(part.Ac_sensors)
        modal.find('.modal-sci input').val(part.Scientific_obj)
        modal.find('.modal-cost input').val(part.Cost)
        modal.find('.modal-id input').val(part._id)
    });
});