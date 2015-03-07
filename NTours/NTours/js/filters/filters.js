/*global define */

define(['angular', 'filters/interpolate-filter', 'services/services'],
    function (angular, InterpolateFilter) {
        'use strict';

        var filters = angular.module('app.filters', ['app.services']);
        filters.filter('interpolate', InterpolateFilter);
        return filters;

    });