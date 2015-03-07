/*global define, require */

define([
        'angular',
        'uiRouter',
        'config',
        'filters/filters',
        'services/services',
        'directives/directives',
        'controllers/controllers',
        'ionicAngular'
    ],
    function(angular, uiRouter) {
        'use strict';

        var app = angular.module('app', [
            'ionic',
            'app.controllers',
            'app.filters',
            'app.services',
            'app.directives',
            'app.config',
            'ui.router'
        ]);

        app.config( [
            '$compileProvider', function($compileProvider) {
                $compileProvider
                    .imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);
            }
        ]);
        return app;

    });