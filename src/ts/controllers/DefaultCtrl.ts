/// <reference path='../_all.ts' />

module yggdrasil {

    export class DefaultCtrl {

        public static $inject = [
            '$scope',
            '$location'
        ];

        private scope: IDefaultScope;
        private location: ng.ILocationService;

        constructor (
            $scope: IDefaultScope,
            $location: ng.ILocationService
        ) {

            this.scope = $scope;

            this.scope.vm = this;

            this.location = $location;

            // Initialize form model
            this.scope.form = {
                zip: ''
            };
        }

        findPlans = () => {
            this.location
                .path('/search')
                .search({
                    'zip': this.scope.form.zip
                });
        };

    }

}