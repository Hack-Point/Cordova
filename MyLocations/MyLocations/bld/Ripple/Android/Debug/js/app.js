define(['angular', 'uiRoute'], function (ng) {
    'use strict';
    return ng.module('spa', ['app.controllers', 'app.directives', 'ui.router']);
});