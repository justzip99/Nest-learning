import { Injectable, UseGuards } from '@nestjs/common';
import { AuthuserDto } from './dto/request/Authuser.dto';
import { updateUserDto } from './dto/request/updateUser.dto';
import { plainToInstance } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
@Injectable()

export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>
) {
    }
        createUser(AuthuserDto: AuthuserDto):Promise<User> {
            return this.userRepository.save(AuthuserDto);
    }

    updateUser(id: number, updateUserDto: updateUserDto) {
        
    }
}   
