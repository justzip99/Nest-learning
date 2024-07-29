import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {id: 1, name: 'John Doe', gender: 'male', age: 22 },
        {id: 2, name: 'Jane Lorrent', gender: 'female', age: 25 },
        {id: 3, name: 'Jason Chan', gender: 'male', age: 30 },
        {id: 4, name: 'Jessica Doe', gender: 'female', age: 28 },
    ]
    getUsers(gender?: 'male' | 'female') {
        if(gender) {
            return this.users.filter((user) => user.gender === gender)
        }
        return this.users;
    }
}
