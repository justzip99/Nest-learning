import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    private users = [
        {id: 1, name: 'John Doe', gender: 'male', age: 22 },
        {id: 2, name: 'Jane Lorrent', gender: 'female', age: 25 },
        {id: 3, name: 'Jason Chan', gender: 'male', age: 30 },
        {id: 4, name: 'Jessica Doe', gender: 'female', age: 28 },
    ]
    getUsers(gender?: 'male' | 'female') {
        
        return this.users;
    } 

    getUser(id: number) {
        const user = this.users.find((user) => user.id === id);

        if(!user) {
            throw new Error('User not found');
        }
        return user;
    }

    createUser(createUserDto: createUserDto) {
        const newUser = {id: this.users.length + 1, ...createUserDto}
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id: number, updateUserDto: updateUserDto) {
        this.users = this.users.map((user) => {
            if(user.id === id) {
                return { ...user, ...updateUserDto}
            }
            return user;
        })
        return this.getUser(id);
    }

    removeUser(id: number) {
        const tobeDeleted = this.getUser(id);
        this.users = this.users.filter((user) => user.id !== id);
        return tobeDeleted;
    }

}
