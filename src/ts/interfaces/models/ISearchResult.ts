/// <reference path='../../_all.ts' />

module yggdrasil {

    export interface ISearchResult {

        planName: string;

        insurer: string;

        monthlyCost: string;

        deductible: string;

        grade: string;

        services: Array<IServiceOffering>;

    }

}