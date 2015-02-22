angular.module('spa').controller('CategoriesListCtrl', ['dbService', function (db) {
    var vm = this;
    vm.categories = db.restoreState('categories') || [];
    vm.buttonState = 'add';

    vm.addNew = function () {
        if (vm.buttonState === 'save') {
            vm.buttonState = 'add';

            if (!_.isEmpty(vm.categoryName)) {
                _.forEach(vm.categories, function (e) {
                    if (angular.equals(e.id, vm.selectedItem.id)) {
                        e.name = vm.categoryName;
                    }
                });
                save();
            }
            return;
        }

        if (!_.isEmpty(vm.categoryName)) {
            vm.categories.push({ id: vm.categories.length + 1, name: vm.categoryName });
            save();
        }
    }
    vm.selectedItem = null;

    vm.edit = function (item) {
        vm.buttonState = 'save';
        vm.categoryName = item.name;
        vm.selectedItem =
            _.chain(vm.categories)
            .filter(function(x) { return x.id === item.id })
            .first()
            .value();
    }

    vm.deleteItem = function (item) {
        vm.categories = _.reject(vm.categories, function (o) {
            return item.id === o.id; // or some complex logic
        });

        try {
            // save the categories to db
            db.saveState('categories', vm.categories);
        } catch (e) {
            throw e;
        }
    }

    function save() {
        try {
            // save the categories to db
            db.saveState('categories', vm.categories);
            vm.categoryName = '';
        } catch (e) {
            throw e;
        }
    }
}]);