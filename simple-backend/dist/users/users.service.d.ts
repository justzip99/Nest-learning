import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
export declare class UsersService {
    private users;
    getUsers(): any[];
    getUser(id: number): any;
    createUser(createUserDto: createUserDto): {
        id: number;
        name: string;
        gender: "male" | "female";
        age: number;
    };
    updateUser(id: number, updateUserDto: updateUserDto): any;
    removeUser(id: number): any;
}
