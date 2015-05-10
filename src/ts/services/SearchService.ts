/// <reference path='../_all.ts' />

module yggdrasil {

    export class SearchService implements ISearchService {

        public static $inject = [
            '$http'
        ];

        private http: ng.IHttpService;

        constructor (
            private $http: ng.IHttpService
        ) {
            this.http = $http;
        }


        search ( zipCode:string ) : ng.IPromise<Array<ISearchResult>> {

            var req : ng.IPromise<Array<ISearchResult>> = this.http
                .get('mockdata/search_results.json')
                .then( (response) => {
                    return response.data;
                });

            return req;
        }
    }

}