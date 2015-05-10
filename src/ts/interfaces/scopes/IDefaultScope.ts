/// <reference path='../../_all.ts' />

module yggdrasil {

    export interface IDefaultScope extends ng.IScope {

        vm: DefaultCtrl;

        form: {
            zip: string
        };
    }

}