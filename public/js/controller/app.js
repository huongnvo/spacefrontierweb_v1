window.spaceFrontierApp = angular.module('spaceFrontierApp', ['ngRoute', 'ui.bootstrap', 'satellizer']).config(function($authProvider) {
	$authProvider.loginUrl = 'http://localhost:3000/auth/login';
	$authProvider.signupUrl = 'http://localhost:3000/auth/signup';

	// $authProvider.oauth2({
	// 	name: 'instagram',
	// 	url: 'http://localhost:3000/auth/instagram',
	// 	redirectUri: 'http://localhost:8000',
	// 	clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1',
	// 	requiredUrlParams: ['scope'],
	// 	scope: ['likes'],
	// 	scopeDelimiter: '+',
	// 	authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
	// });

	$authProvider.google({
		url: '/auth/google',
		authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
		scope: ['profile', 'email'],
		scopePrefix: 'openid',
		scopeDelimiter: ' ',
		requiredUrlParams: ['scope'],
		optionalUrlParams: ['display'],
		display: 'popup',
		type: '2.0',
		// popupOptions: { width: 580, height: 400 }
      	clientId: '217248021488-i3n2oga8lci3159i8al59c0l4qmo1bkn.apps.googleusercontent.com'
    });
});