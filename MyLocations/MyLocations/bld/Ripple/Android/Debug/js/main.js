require.config({
    waitSeconds: 1,
    // plugins and path that getting used in the application
    paths: {
        'angular': 'vendors/angularjs/angular',
        'underscore': 'vendors/underscore/undescore',
        'materialize': 'vendors/materialize/materialize',
        'uiRoute': './vendors/angular/angular-ui-router',
        'uiTouch': './vendors/angular/angular-touch',
        'jquery': ['/vendors/jquery/jquery-2.1.3'],
    },

    // angular doesn't support AMD out of the box so create a temp variable in global namespace...
    shim: {
        uiRoute: {
            deps: ['angular'],
            exports: 'uiRoute'
        },

        underscore: {
            exports: '_'
        },

        angular: {
            exports: 'angular'
        }
    },
    dev: {
        options: {
            optimize: 'none'
        }
    },
    release: {
        options: {
            optimize: 'uglify'
        }
    },
    baseUrl: 'js',

    // startup the application
    deps: ['bootstrap']
});
