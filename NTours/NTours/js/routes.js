/*global define, require */

define(['app'], function (app) {
    'use strict';

    app.config([
        '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');

            $locationProvider.html5Mode({ enabled: false, requireBase: false });

            $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: 'views/dashboard.html',
                    data: { pageTitle: 'Logo goes here' }
                })
                .state('/search', {
                    url: '/search-in-world',
                    templateUrl: 'views/allsearch.html',
                    data: { pageTitle: 'Maybe title goes here?' }
                })
                .state('/searchresult', {
                    url: '/search-results',
                    templateUrl: 'views/search-result.html',
                    data: { pageTitle: 'Maybe title goes here?' }
                });

        }
    ]);
    return app;
});

