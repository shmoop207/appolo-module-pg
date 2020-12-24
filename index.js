"use strict";
var PgModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgModule = exports.PgProvider = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
exports.pg = require("pg");
const pgProvider_1 = require("./src/pgProvider");
Object.defineProperty(exports, "PgProvider", { enumerable: true, get: function () { return pgProvider_1.PgProvider; } });
let PgModule = PgModule_1 = class PgModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = { id: "pgProvider" };
    }
    static for(options) {
        return { type: PgModule_1, options };
    }
    get exports() {
        return [{ id: this.moduleOptions.id, type: pgProvider_1.PgProvider }];
    }
};
PgModule = PgModule_1 = tslib_1.__decorate([
    engine_1.module()
], PgModule);
exports.PgModule = PgModule;
//# sourceMappingURL=index.js.map