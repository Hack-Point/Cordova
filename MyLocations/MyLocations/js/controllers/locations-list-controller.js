angular.module('spa').controller('LocationsCtrl', ['$scope', 'dbService', function ($scope, db) {
    var vm = this;
    vm.buttonState = 'add'; // set inital button state to create or save
    vm.categories = db.restoreState('categories') || [];

    
    $scope.$on('select.item.changed', function(event, data) {
        vm.category = data;
    });
}]);