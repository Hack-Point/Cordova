angular.module('spa').factory('sqlService', [function() {
    var dbShell = window.openDatabase("MyLocations", "0.1", "My Locations", 5 * (1024 ^ 2), function (db) {
        return db;
    });

    return {
        dbContext: dbShell
    };
}]);