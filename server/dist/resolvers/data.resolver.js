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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataResolver = void 0;
const type_graphql_1 = require("type-graphql");
const responses_1 = require("../utils/responses");
const inputs_1 = require("../utils/inputs");
const entity_1 = require("../entity");
let DataResolver = class DataResolver {
    data() {
        return 'hello from data';
    }
    history() {
        return __awaiter(this, void 0, void 0, function* () {
            return entity_1.Base.find({ order: { id: 'DESC' } });
        });
    }
    createBaseData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data || !data.bg_before || !data.carbs) {
                return {
                    status: false,
                    message: 'Invalid Data !'
                };
            }
            try {
                const base = new entity_1.Base();
                base.bg_before = data.bg_before;
                base.carbs = data.carbs;
                yield base.save();
                return {
                    status: true,
                    base: base
                };
            }
            catch (e) {
                console.log('create Base data error => ', e);
                return {
                    status: false,
                    message: 'Something went wrong !'
                };
            }
        });
    }
    updateBaseData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data || !data.id) {
                return {
                    status: false,
                    message: 'Invalid Data !'
                };
            }
            const baseData = yield entity_1.Base.findOne({ where: { id: data.id } });
            if (!baseData) {
                return {
                    status: false,
                    message: 'Base Data not found !'
                };
            }
            try {
                baseData.bg_after = data.bg_after || baseData.bg_after;
                baseData.bg_before = data.bg_before;
                baseData.carbs = data.carbs;
                baseData.correction = data.correction || baseData.correction;
                baseData.hypoglycemia = data.hypoglycemia || baseData.hypoglycemia;
                baseData.insulin_taken = data.insulin_taken || baseData.insulin_taken;
                yield baseData.save();
                return {
                    status: true,
                    base: baseData
                };
            }
            catch (e) {
                console.log("error while updating base data => ", e);
                return {
                    status: false,
                    message: 'Something went wrong !'
                };
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DataResolver.prototype, "data", null);
__decorate([
    type_graphql_1.Query(() => [entity_1.Base]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DataResolver.prototype, "history", null);
__decorate([
    type_graphql_1.Mutation(() => responses_1.DataDefaultResponse),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.AddBaseInput]),
    __metadata("design:returntype", Promise)
], DataResolver.prototype, "createBaseData", null);
__decorate([
    type_graphql_1.Mutation(() => responses_1.DataDefaultResponse),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.UpdateBaseDataInput]),
    __metadata("design:returntype", Promise)
], DataResolver.prototype, "updateBaseData", null);
DataResolver = __decorate([
    type_graphql_1.Resolver()
], DataResolver);
exports.DataResolver = DataResolver;
//# sourceMappingURL=data.resolver.js.map