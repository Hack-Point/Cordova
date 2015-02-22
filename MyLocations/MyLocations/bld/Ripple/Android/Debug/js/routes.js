'use strict';
angular.module('spa').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
        enabled: false
    });

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/views/home.html',
                data: { pageTitle: 'Home' }
            })
            .state('/categories', {
                url: '/categories:id',
                templateUrl: '/views/categories.html',
                data: { pageTitle: 'Categories' }
            })
            .state('/locations', {
                url: '/locations',
                templateUrl: '/views/locations.html',
                data: { pageTitle: 'Locations' }
            })
            .state('/location', {
                url: '/location:id',
                templateUrl: '/views/location.html',
                data: { pageTitle: 'Create Location' }
            });
    }]);