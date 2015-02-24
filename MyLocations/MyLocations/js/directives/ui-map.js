angular.module('spa').directive('uiMap', [function () {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            var map = new GMaps({
                div: '#' + attrs.id,
                lat: -12.043333,
                lng: -77.028333
            });
        }
    }
}]);