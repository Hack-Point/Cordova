angular.module('spa').controller('CategoryCreateCtrl', ['dbService', function (db) {
    var vm = this;

    vm.save = function () {
        if (!_.isEmpty(vm.categoryName)) {
            var categoriesStore = db.restoreState('categories') || [];

            var category = {
                id: 1,
                name: vm.categoryName
            };
            try {
                // save the categories to db
                db.saveState('categories', category);
            } catch (e) {
                throw e;
            }
            // vm.categoryName = '';
        }
    }
}]);