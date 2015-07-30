spaceFrontierApp.controller("signinController", function($scope,$http) {
	$scope.load = function() {	
		gapi.client.load('plus','v1', function(){
			var request = gapi.client.plus.people.get({
				'userId': 'me'
			});
			request.execute(function(resp) {
				console.log('Retrieved profile for:' + resp.displayName);
				$scope.name = resp.displayName;
			});
		});
	};

	$scope.name = 'poop';
	
	$scope.signOut = function() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        	console.log('User signed out.');
        });
        // $scope.signout = 'poop';
    };

    function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    };

});