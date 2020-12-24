"use strict";
import {define, factory, IFactory, inject, singleton} from '@appolo/inject';
import {ILogger} from "@appolo/logger";
import {IOptions} from "../index";
import pg = require('pg');


@define()
@singleton()
@factory()
export class PgClient implements IFactory<pg.Client> {

    @inject() logger: ILogger;
    @inject() moduleOptions: IOptions;

    public async get(): Promise<pg.Client> {

        try {

            let options = {ssl: {rejectUnauthorized: false}, ...(this.moduleOptions.config || {})};

            let client = new pg.Client(options);

            client.on('error', (err) => {
                this.logger.error("pg connection error" + err.toString());
                process.exit(1);
            });

            client.on("end", () => {
                this.logger.error("pg connection end");
                process.exit(1);
            });

            await client.connect();

            this.logger.info(`connected to mysql ${this.moduleOptions.id}`);

            return client;


        } catch (e) {

            this.logger.error(`failed to connect to mysql ${this.moduleOptions.id}`, {err: e.toString()});

            throw e;
        }


    }
}
