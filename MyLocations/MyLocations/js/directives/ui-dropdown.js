angular.module('spa').directive('uiDropdown', ['dbService', function (db) {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: '/views/dropdown.html',
        tranclude: true,
        scope: {
            linkText: '@',
            datasource: '=',
        },
        link: function (scope, element, attrs) {
            scope.$watch('seletedItem', function(newVal) {
                scope.selectedItem = newVal;
                console.log(newVal);
            });
        }
    }
}]);