import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/updateUser.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(gender: string): {
        id: number;
        name: string;
        gender: string;
        age: number;
    }[];
    getUsersById(id: string): {
        id: number;
        name: string;
        gender: string;
        age: number;
    };
    RegisterUser(createUserDto: createUserDto): {
        id: number;
        name: string;
        gender: string;
        age: number;
    };
    LoginUser(): {};
    updateUserById(id: string, updateUserDto: updateUserDto): {
        id: number;
        name: string;
        gender: string;
        age: number;
    };
    deleteUserById(id: string): {
        id: number;
        name: string;
        gender: string;
        age: number;
    };
}
