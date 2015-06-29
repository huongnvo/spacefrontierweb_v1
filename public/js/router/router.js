spaceFrontierApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html',
            controller: 'mainPageController'
        }).when('/home', {
            templateUrl: 'tmpl/home.html',
            controller: 'mainPageController'
        }).when('/about', {
            templateUrl: 'tmpl/about.html',
            controller: 'aboutController'
        }).when('/tool', {
            templateUrl: 'tmpl/tool.html',
            controller: 'toolController'
        }).when('/tool1', {
            templateUrl: 'tmpl/instruments.html',
            controller: 'instrumentsController'
        }).when('/tool2', {
            templateUrl: 'tmpl/attitude.html',
            controller: 'attitudeController'
        }).when('/tool3', {
            templateUrl: 'tmpl/trajectory.html',
            controller: 'trajectoryController'
        }).when('/tool4', {
            templateUrl: 'tmpl/comm.html',
            controller: 'commController'
        }).when('/tool5', {
            templateUrl: 'tmpl/data.html',
            controller: 'dataController'
        }).when('/tool6', {
            templateUrl: 'tmpl/power.html',
            controller: 'powerController'
        }).when('/tool7', {
            templateUrl: 'tmpl/bus.html',
            controller: 'busController'
        }).when('/tool8', {
            templateUrl: 'tmpl/results.html',
            controller: 'resultsController'
        }).otherwise({
            redirectTo: '/'
        });
});