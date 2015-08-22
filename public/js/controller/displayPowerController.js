spaceFrontierApp.controller("displayPowerController", function($scope, $http) {
    $scope.parts = [];
    $scope.newPart = {};
    $scope.admin = false;    
    $scope.showInfo = false;

    var token = window.location.search.slice(1);

    $scope.remove = function() {
        $scope.notAdmin = false;
    };

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
            $scope.userName = output.name;
            $scope.email = output.email;
            $scope.admin = output.admin;
            $scope.showInfo = true;
        }
    };
    $scope.decode();

    $scope.backMain = function() {
        var newPath = '/listAdmin?' + token;
        window.location = newPath;    
    };

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
        if ($scope.admin) {
            $http.put('/parts/power/' + $scope.id + '?' + token, $scope.newPart)
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
            $scope.edit = false;
        }
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
        $http.post('/parts/power' + '?' + token, $scope.newPart)
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
        if ($scope.admin) {
            $http.delete('/parts/power/' + id + '?' + token)
                .then(function(result) {
                    $http.get('/parts/power').then(function(result) { 
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
