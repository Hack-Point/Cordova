angular.module('spa').factory('dbService', [
    '$rootScope', 'localStorageService',
    function($rootScope, localStorageService) {
        var service = {
            saveState: function (key, model) {
                window.localStorage.setItem(key, angular.toJson(model));
                // localStorageService.set(key, model);
            },
            restoreState: function(key) {
                var model = window.localStorage.getItem(key);
                return angular.fromJson(model);
            },
            deleteState: function(key) {
                window.localStorage.removeItem(key);
            },
            all: function() {
                window.localStorage.clear();
            }
        };

        $rootScope.$on("save", service.saveState);
        $rootScope.$on("restore", service.restoreState);
        $rootScope.$on("delete", service.deleteState);
        $rootScope.$on("clearall", service.all);

        return service;
    }
]);