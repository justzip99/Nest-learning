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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const Authuser_dto_1 = require("./dto/request/Authuser.dto");
const users_service_1 = require("./users.service");
const updateUser_dto_1 = require("./dto/request/updateUser.dto");
const bcrypt = require("bcrypt");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async RegisterUser(AuthuserDto) {
        const hashedPassword = await bcrypt.hash(AuthuserDto.password, 10);
        return this.usersService.createUser(AuthuserDto);
    }
    async LoginUser(createUserDto) {
    }
    updateUserById(id, updateUserDto) {
        try {
            return this.usersService.updateUser(parseInt(id), updateUserDto);
        }
        catch (err) {
            throw new common_1.NotFoundException("User not found");
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Authuser_dto_1.AuthuserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "RegisterUser", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Authuser_dto_1.AuthuserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "LoginUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateUser_dto_1.updateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUserById", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map