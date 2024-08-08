import { Injectable, UseGuards } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
@Injectable()

export class UsersService {
    private users = []

    getUsers() {
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
