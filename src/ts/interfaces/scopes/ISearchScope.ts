/// <reference path='../../_all.ts' />

module yggdrasil {

    export interface ISearchScope extends ng.IScope {

        vm: SearchCtrl;

        searchResults: Array<ISearchResult>;

        form: {
            zip: string
        };
    }

}