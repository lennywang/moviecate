'use strict';

(function(angular) {

    var module = angular.module('moviecat', ['ngRoute', 'moviecat.in_theater',
        'moviecat.comming_soon', 'moviecat.top250'
    ]);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters' });
    }])

})(angular);
