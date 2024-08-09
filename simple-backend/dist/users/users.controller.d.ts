import { AuthuserDto } from './dto/request/Authuser.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/request/updateUser.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    RegisterUser(AuthuserDto: AuthuserDto): Promise<import("./users.entity").User>;
    LoginUser(createUserDto: AuthuserDto): Promise<void>;
    updateUserById(id: string, updateUserDto: updateUserDto): void;
}
