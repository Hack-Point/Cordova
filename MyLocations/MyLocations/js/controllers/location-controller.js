angular.module('spa').controller('LocationCtrl', ['dbService', function (db) {
    var vm = this;
    vm.categories = db.restoreState('categories') || [];
}]);