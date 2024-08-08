import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/updateUser.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(gender: string): any[];
    getUsersById(id: number): any;
    RegisterUser(createUserDto: createUserDto): {
        id: number;
        name: string;
        gender: "male" | "female";
        age: number;
    };
    updateUserById(id: string, updateUserDto: updateUserDto): any;
    deleteUserById(id: string): any;
}
