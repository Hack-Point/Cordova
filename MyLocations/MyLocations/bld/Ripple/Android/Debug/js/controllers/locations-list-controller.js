angular.module('spa').controller('LocationCtrl', ['dbService', function (db) {
    var vm = this;
    vm.buttonState = 'add'; // set inital button state to create or save
    vm.locations = db.restoreState('locations') || [];

}]);