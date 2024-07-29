import { createUserDto } from './dto/createUser.dto';
export declare class UsersController {
    getUsers(gender: 'male' | 'female'): {
        id: number;
        name: string;
        gender: string;
        age: number;
    }[];
    getUsersById(id: string): {
        id: string;
    };
    RegisterUser(createUserDto: createUserDto): {
        name: string;
    };
    LoginUser(): {};
    updateUserById(id: string, createUserDto: createUserDto): {
        id: string;
        name: string;
    };
    deleteUserById(id: string): {
        'Delete user id': string;
    };
}
