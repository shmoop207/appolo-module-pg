"use strict";
import {IModuleParams, module, Module} from '@appolo/engine';
import {ClientConfig} from "pg";

export interface IOptions {
    id?: string,
    config?: ClientConfig
}

export import pg = require('pg');
import {PgProvider} from "./src/pgProvider";

export {PgProvider}

@module()
export class PgModule extends Module<IOptions> {

    public static for(options: IOptions) {
        return {type: PgModule, options}
    }

    protected readonly Defaults: Partial<IOptions> = {id: "pgProvider"};

    public get exports() {
        return [{id: this.moduleOptions.id, type: PgProvider}];
    }
}
