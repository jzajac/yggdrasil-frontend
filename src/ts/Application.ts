/// <reference path='_all.ts' />

module yggdrasil {

    'use strict';

    var app = angular.module('yggdrasil', ['ngRoute', 'pascalprecht.translate', 'templates'])
        .config ( ($compileProvider: ng.ICompileProvider) => {

            // Disables debug data in DOM for performance boost
            // See:
            //  * https://docs.angularjs.org/guide/production#disabling-debug-data
            //  * https://docs.angularjs.org/api/ng/provider/$compileProvider
            // Re-enable this by running the following in dev console:
            //  angular.reloadWithDebugInfo();
            $compileProvider.debugInfoEnabled(false);

        })
        .config ( ($routeProvider: ng.route.IRouteProvider) => {

            // Configure routing
            // Hitting the route of the app, or hitting a route that's
            // not registered (i.e., /foo/bar) will route those requests
            // over to DefaultCtrl

            $routeProvider
                .when('/', {
                    controller: 'DefaultCtrl',
                    templateUrl: 'landing.html'
                })
                .when('/search', {
                    controller: 'SearchCtrl',
                    templateUrl: 'search.html'
                })
                .otherwise({
                    controller: 'DefaultCtrl',
                    templateUrl: 'landing.html'
                });

        })
        .config ( ($translateProvider: angular.translate.ITranslateProvider) => {

            // Configure localization
            // The goal is to keep hard coded text strings out of the templates and
            // inside locale JSON files. In the future, if this app were to add in another
            // language like French or Spanish, localization is just a matter of translating
            // the locale-en.JSON file.

            $translateProvider.useStaticFilesLoader({
                prefix: 'i18n/locale-',
                suffix: '.json'
            });

            $translateProvider.useSanitizeValueStrategy('escaped');

            $translateProvider.preferredLanguage('en');

        })
        .service ( 'SearchService', SearchService )
        .controller ( 'DefaultCtrl', DefaultCtrl )
        .controller ( 'SearchCtrl', SearchCtrl );
}