import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
export declare class UsersService {
    private users;
    getUsers(gender?: 'male' | 'female'): {
        id: number;
        name: string;
        gender: string;
        age: number;
    }[];
    getUser(id: number): {
        id: number;
        name: string;
        gender: string;
        age: number;
    };
    createUser(createUserDto: createUserDto): {
        id: number;
        name: string;
        gender: string;
        age: number;
    };
    updateUser(id: number, updateUserDto: updateUserDto): {
        id: number;
        name: string;
        gender: string;
        age: number;
    };
    removeUser(id: number): {
        id: number;
        name: string;
        gender: string;
        age: number;
    };
}
