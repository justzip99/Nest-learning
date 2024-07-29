import { createUserDto } from './createUser.dto';
declare const updateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<createUserDto>>;
export declare class updateUserDto extends updateUserDto_base {
    name: string;
}
export {};
