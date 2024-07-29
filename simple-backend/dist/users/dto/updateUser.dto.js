"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDto = void 0;
const createUser_dto_1 = require("./createUser.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class updateUserDto extends (0, mapped_types_1.PartialType)(createUser_dto_1.createUserDto) {
}
exports.updateUserDto = updateUserDto;
//# sourceMappingURL=updateUser.dto.js.map