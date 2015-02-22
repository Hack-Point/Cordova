angular.module('spa').directive('uiHeader', [function () {
    return {
        restrict: 'E',
        templateUrl: '/views/header.html',
        scope: {
            title: '@title'
        },
        link: function (scope, element, attrs) {
            $('.button-collapse').sideNav({ menuWidth: 240, activationWidth: 70 });
        }
    };
}]);


