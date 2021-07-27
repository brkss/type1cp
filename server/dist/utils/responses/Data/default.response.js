"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDefaultResponse = void 0;
const entity_1 = require("../../../entity");
const type_graphql_1 = require("type-graphql");
let DataDefaultResponse = class DataDefaultResponse {
};
__decorate([
    type_graphql_1.Field(() => Boolean),
    __metadata("design:type", Boolean)
], DataDefaultResponse.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], DataDefaultResponse.prototype, "message", void 0);
__decorate([
    type_graphql_1.Field(() => entity_1.Base, { nullable: true }),
    __metadata("design:type", entity_1.Base)
], DataDefaultResponse.prototype, "base", void 0);
DataDefaultResponse = __decorate([
    type_graphql_1.ObjectType()
], DataDefaultResponse);
exports.DataDefaultResponse = DataDefaultResponse;
//# sourceMappingURL=default.response.js.map