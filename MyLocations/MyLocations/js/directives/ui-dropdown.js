angular.module('spa').directive('uiDropdown', ['dbService', function (db) {
    return {
        restrict: 'AE',
        scope: {
            dataSource: '@',
            linkText: '='
        },
        link: function (scope, element, attrs) {
            scope.items = db.restoreState(attrs.dataSource) || [];
        },
        compile: function () {
            return {
                pre: function () { },
                post: function (scope, element) {
                    $('.dropdown-button').dropdown({
                        inDuration: 300,
                        outDuration: 225,
                        constrain_width: false, // Does not change width of dropdown to that of the activator
                        hover: false, // Activate on click
                        alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
                        gutter: 0, // Spacing from edge
                        belowOrigin: false // Displays dropdown below the button
                    });
                }
            }
        }
    }
}]);