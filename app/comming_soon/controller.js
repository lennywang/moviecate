'use strict';

(function() {
    var module = angular.module('moviecat.comming_soon', ['ngRoute']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/comming_soon', {
            templateUrl: 'comming_soon/view.html',
            controller: 'CommingSoonController'
        });
    }])

    module.controller('CommingSoonController', ['$scope', '$http', function($scope, $http) {
        $scope.data = [];
        $http({
            url: '/app/datas/comming_soon.json'
        }).then(function(data) {
            if (data.status == 200) {
                $scope.data = data.data.subjects;
            }

        }, function(err) {
            console.log(err);
        })
    }]);

})();
