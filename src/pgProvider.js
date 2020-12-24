"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
let PgProvider = class PgProvider {
    get client() {
        return this.pgClient;
    }
    query(queryTextOrConfig, values) {
        return this.pgClient.query(queryTextOrConfig, values);
    }
};
tslib_1.__decorate([
    inject_1.inject()
], PgProvider.prototype, "pgClient", void 0);
PgProvider = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], PgProvider);
exports.PgProvider = PgProvider;
//# sourceMappingURL=pgProvider.js.map