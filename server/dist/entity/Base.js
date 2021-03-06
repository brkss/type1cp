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
exports.Base = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
let Base = class Base extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Base.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Base.prototype, "bg_before", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Base.prototype, "carbs", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ default: null }),
    __metadata("design:type", Number)
], Base.prototype, "bg_after", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ default: null }),
    __metadata("design:type", Number)
], Base.prototype, "insulin_taken", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Base.prototype, "hypoglycemia", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Base.prototype, "correction", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Base.prototype, "created_at", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Base.prototype, "updated_at", void 0);
Base = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Base);
exports.Base = Base;
//# sourceMappingURL=Base.js.map