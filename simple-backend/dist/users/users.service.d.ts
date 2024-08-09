import { AuthuserDto } from './dto/request/Authuser.dto';
import { updateUserDto } from './dto/request/updateUser.dto';
import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(AuthuserDto: AuthuserDto): Promise<User>;
    updateUser(id: number, updateUserDto: updateUserDto): void;
}
