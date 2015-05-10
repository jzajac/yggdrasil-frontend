describe('DefaultCtrl', function () {

    'use strict';

    var $rootScope;
    var ctrl;
    var scope;

    beforeEach(module('yggdrasil', function ($provide, $translateProvider) {
        $provide.factory('customLoader', function ($q) {
            return function () {
                var deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            };
        });

        $translateProvider.useLoader('customLoader');
    }));

    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;

        scope = $rootScope.$new();

        ctrl = _$controller_('DefaultCtrl', {
            $scope: scope
        });
    }));

    it('should not set zip code by default', function () {
        expect(scope.form.zip).toBeFalsy();
    });

});