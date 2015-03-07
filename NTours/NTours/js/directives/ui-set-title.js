﻿define(['angular'], function (angular) {
    "use strict";

    var directive = function ($rootScope, $timeout) {
        return {
            link: function (scope, element) {

                var listener = function (event, toState) {

                    var title = 'Default Title';
                    if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

                    $timeout(function () {
                        element.text(title);
                    }, 0, false);
                };

                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    };

    directive.$inject = ['$rootScope', '$timeout'];
    return directive;
});