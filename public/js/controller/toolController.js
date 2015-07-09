spaceFrontierApp.controller("toolController", function($scope, $http) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }

    $scope.cubesat = [];
    var idstring = '';
    $http.post('/parts/cubesat').then(function(result) { 
        $scope.cubesat = result.data; 
        idstring = $scope.cubesat['_id'] + '';
    });

    $scope.buildCubesat = function() {
        var path = '/tool1?' + idstring;
        window.location = path;    
    };

});