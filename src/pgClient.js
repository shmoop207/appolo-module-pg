"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgClient = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const pg = require("pg");
let PgClient = class PgClient {
    async get() {
        try {
            let options = Object.assign({ ssl: { rejectUnauthorized: false } }, (this.moduleOptions.config || {}));
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
        }
        catch (e) {
            this.logger.error(`failed to connect to mysql ${this.moduleOptions.id}`, { err: e.toString() });
            throw e;
        }
    }
};
tslib_1.__decorate([
    inject_1.inject()
], PgClient.prototype, "logger", void 0);
tslib_1.__decorate([
    inject_1.inject()
], PgClient.prototype, "moduleOptions", void 0);
PgClient = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    inject_1.factory()
], PgClient);
exports.PgClient = PgClient;
//# sourceMappingURL=pgClient.js.map