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
exports.UpdateBaseDataInput = void 0;
const type_graphql_1 = require("type-graphql");
let UpdateBaseDataInput = class UpdateBaseDataInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], UpdateBaseDataInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], UpdateBaseDataInput.prototype, "bg_before", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], UpdateBaseDataInput.prototype, "carbs", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UpdateBaseDataInput.prototype, "bg_after", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UpdateBaseDataInput.prototype, "insulin_taken", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UpdateBaseDataInput.prototype, "correction", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateBaseDataInput.prototype, "hypoglycemia", void 0);
UpdateBaseDataInput = __decorate([
    type_graphql_1.InputType()
], UpdateBaseDataInput);
exports.UpdateBaseDataInput = UpdateBaseDataInput;
//# sourceMappingURL=update.input.js.map