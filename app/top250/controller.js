'use strict';

(function() {
    var module = angular.module('moviecat.top250', ['ngRoute']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: 'top250/view.html?v=0003',
            controller: 'Top250Controller'
        });
    }])

    module.controller('Top250Controller', ['$scope', '$http', function($scope, $http) {
        $scope.data = [];
        $http({
            url: '/app/datas/top250.json'
        }).then(function(data) {
            if (data.status == 200) {
                $scope.data = data.data.subjects;
            }

        }, function(err) {
            console.log(err);
        })
    }]);

})();
