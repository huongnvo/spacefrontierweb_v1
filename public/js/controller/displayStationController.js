spaceFrontierApp.controller("displayStationController", function($scope, $http) {
    $scope.parts = [];
    $scope.newPart = {};
    $scope.notAdmin = false;
    
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
            $scope.name = output.name;
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
        if ($scope.admin) {
            $http.put('/parts/station/' + $scope.id + '?' + token, $scope.newPart)
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
                    $scope.edit = false;
            });     
        } else {
            $scope.notAdmin = true;
            $scope.message = 'You do not have permission to edit this item';
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
            $scope.edit = false;
        }   
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
        $http.post('/parts/station' + '?' + token, $scope.newPart)
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
        if ($scope.admin) {
            $http.delete('/parts/station/' + id + '?' + token)
                .success(function(data) {
                    $http.get('/parts/station').then(function(result) { 
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