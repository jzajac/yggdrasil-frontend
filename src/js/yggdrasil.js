/// <reference path='../../_all.ts' />
/// <reference path='../../_all.ts' />
/// <reference path='../../_all.ts' />
/// <reference path='../../_all.ts' />
/// <reference path='../_all.ts' />
var yggdrasil;
(function (yggdrasil) {
    var SearchService = (function () {
        function SearchService($http) {
            this.$http = $http;
            this.http = $http;
        }
        SearchService.prototype.search = function (zipCode) {
            var req = this.http.get('mockdata/search_results.json').then(function (response) {
                return response.data;
            });
            return req;
        };
        SearchService.$inject = [
            '$http'
        ];
        return SearchService;
    })();
    yggdrasil.SearchService = SearchService;
})(yggdrasil || (yggdrasil = {}));
/// <reference path='../_all.ts' />
var yggdrasil;
(function (yggdrasil) {
    var DefaultCtrl = (function () {
        function DefaultCtrl($scope, $location) {
            var _this = this;
            this.findPlans = function () {
                _this.location.path('/search').search({
                    'zip': _this.scope.form.zip
                });
            };
            this.scope = $scope;
            this.scope.vm = this;
            this.location = $location;
            // Initialize form model
            this.scope.form = {
                zip: ''
            };
        }
        DefaultCtrl.$inject = [
            '$scope',
            '$location'
        ];
        return DefaultCtrl;
    })();
    yggdrasil.DefaultCtrl = DefaultCtrl;
})(yggdrasil || (yggdrasil = {}));
/// <reference path='../_all.ts' />
var yggdrasil;
(function (yggdrasil) {
    var SearchCtrl = (function () {
        function SearchCtrl($scope, $location, searchService) {
            var _this = this;
            this.scope = $scope;
            this.scope.vm = this;
            this.location = $location;
            // Initialize form model
            this.scope.form = {
                zip: this.location.search().zip || ''
            };
            searchService.search(this.scope.form.zip).then(function (results) {
                _this.scope.searchResults = results;
            });
        }
        SearchCtrl.$inject = [
            '$scope',
            '$location',
            'SearchService'
        ];
        return SearchCtrl;
    })();
    yggdrasil.SearchCtrl = SearchCtrl;
})(yggdrasil || (yggdrasil = {}));
/// <reference path='_all.ts' />
var yggdrasil;
(function (yggdrasil) {
    'use strict';
    var app = angular.module('yggdrasil', ['ngRoute', 'pascalprecht.translate', 'templates']).config(function ($compileProvider) {
        // Disables debug data in DOM for performance boost
        // See:
        //  * https://docs.angularjs.org/guide/production#disabling-debug-data
        //  * https://docs.angularjs.org/api/ng/provider/$compileProvider
        // Re-enable this by running the following in dev console:
        //  angular.reloadWithDebugInfo();
        $compileProvider.debugInfoEnabled(false);
    }).config(function ($routeProvider) {
        // Configure routing
        // Hitting the route of the app, or hitting a route that's
        // not registered (i.e., /foo/bar) will route those requests
        // over to DefaultCtrl
        $routeProvider.when('/', {
            controller: 'DefaultCtrl',
            templateUrl: 'landing.html'
        }).when('/search', {
            controller: 'SearchCtrl',
            templateUrl: 'search.html'
        }).otherwise({
            controller: 'DefaultCtrl',
            templateUrl: 'landing.html'
        });
    }).config(function ($translateProvider) {
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
    }).service('SearchService', yggdrasil.SearchService).controller('DefaultCtrl', yggdrasil.DefaultCtrl).controller('SearchCtrl', yggdrasil.SearchCtrl);
})(yggdrasil || (yggdrasil = {}));
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='libs/angular/angular-route.d.ts' />
/// <reference path='libs/angular/angular-translate.d.ts' />
/// <reference path='libs/underscore/underscore.d.ts' />
/// <reference path='interfaces/scopes/IDefaultScope.ts' />
/// <reference path='interfaces/scopes/ISearchScope.ts' />
/// <reference path='interfaces/models/ISearchResult.ts' />
/// <reference path='interfaces/models/IServiceOffering.ts' />
/// <reference path='interfaces/services/ISearchService.ts' />
/// <reference path='services/SearchService.ts' />
/// <reference path='controllers/DefaultCtrl.ts' />
/// <reference path='controllers/SearchCtrl.ts' />
/// <reference path='Application.ts' /> 
/// <reference path='../../_all.ts' />
