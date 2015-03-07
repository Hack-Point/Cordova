define(['angular'], function (angular) {
    "use strict";

    var directive = function () {
        return {
            restrict: 'E',
            require: "uiSetTitle",
            replace: true,
            templateUrl: '/views/partials/nav-bar.html'
        };
    };

    directive.$inject = [];
    return directive;
});