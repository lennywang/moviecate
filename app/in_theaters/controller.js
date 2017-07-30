'use strict';

(function(angular) {


    var module = angular.module('moviecat.in_theater', ['ngRoute']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: 'in_theaters/view.html?v=0001',
            controller: 'IntheaterController'
        });
    }])

    module.controller('IntheaterController', ['$scope', '$http', function($scope, $http) {
        $scope.data = [];
        $http({
            url: '/app/datas/in_theaters.json'
        }).then(function(data) {
            if (data.status == 200) {
                $scope.data = data.data.subjects;
            }

        }, function(err) {
            console.log(err);
        })

    }]);

})(angular);
