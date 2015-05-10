/// <reference path='../_all.ts' />

module yggdrasil {

    export class SearchCtrl {

        public static $inject = [
            '$scope',
            '$location',
            'SearchService'
        ];

        private scope: ISearchScope;
        private location: ng.ILocationService;
        private searchService: SearchService;

        constructor (
            $scope: ISearchScope,
            $location: ng.ILocationService,
            searchService: SearchService
        ) {

            this.scope = $scope;

            this.scope.vm = this;

            this.location = $location;

            // Initialize form model
            this.scope.form = {
                zip: this.location.search().zip || ''
            };

            searchService.search(this.scope.form.zip).then( (results : Array<ISearchResult>) => {
               this.scope.searchResults = results;
            });

        }

    }

}