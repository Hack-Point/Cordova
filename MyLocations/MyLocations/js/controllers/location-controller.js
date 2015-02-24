angular.module('spa').controller('LocationCtrl', ['$scope', '$timeout', 'dbService', function ($scope, $timeout, db) {
    var vm = this;
    vm.categories = db.restoreState('categories') || [];
    vm.locations = db.restoreState('locations') || [];

    vm.save = function(current) {
        $timeout(function() {
            $scope.$on('select.item.changed', function(event, data) {
                vm.category = data;
            });

        }, 0, false);
        $timeout(function() {
            var o = {
                name: current.name,
                address: current.address,
                location: current.coordinates,
                category: vm.category
            };

            vm.locations.push(o);
        }, 0, false);
    }
}]);