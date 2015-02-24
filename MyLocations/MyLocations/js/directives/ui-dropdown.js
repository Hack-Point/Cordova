angular.module('spa').directive('uiDropdown', ['dbService', function (db) {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: '/views/dropdown.html',
        tranclude: true,
        scope: {
            linkText: '@',
            datasource: '='
        },
        link: function (scope, element, attrs) {
            scope.$watch(angular.bind(scope, function (name) {
                return scope.selectedItem;
            }), function (current, original) {
                scope.$emit('select.item.changed', current);
            });
        }
    }
}]);