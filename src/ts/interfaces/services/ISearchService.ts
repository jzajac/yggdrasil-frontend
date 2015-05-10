/// <reference path='../../_all.ts' />

module yggdrasil {

    export interface ISearchService {

        search ( zipCode: string ) : ng.IPromise<Array<ISearchResult>>

    }

}