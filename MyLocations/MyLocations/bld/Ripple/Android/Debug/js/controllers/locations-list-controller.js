angular.module('spa').controller('LocationsCtrl', ['dbService', function (db) {
    var vm = this;
    vm.buttonState = 'add'; // set inital button state to create or save
    vm.categories = db.restoreState('categories') || [];
}]);