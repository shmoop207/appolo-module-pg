import {define, factory, IFactory, inject, singleton} from '@appolo/inject';
import pg = require('pg');
import {QueryConfig, QueryResult, QueryResultRow} from "pg";

@define()
@singleton()
export class PgProvider {
    @inject() private pgClient: pg.Client;


    public get client(): pg.Client {
        return this.pgClient;
    }

    public query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryTextOrConfig: string | QueryConfig<I>,
        values?: I,
    ): Promise<QueryResult<R>> {
        return this.pgClient.query(queryTextOrConfig, values)
    }
}
