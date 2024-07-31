import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {  
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(@Query('gender') gender: string) {
        const service = new UsersService()
        return service.getUsers();
    }

    @Get(':id') 
    getUsersById(@Param('id') id: string) {
        return this.usersService.getUser(parseInt(id));
    }

    @Post()
    RegisterUser(@Body() createUserDto: createUserDto) {
        return this.usersService.createUser(createUserDto)
    };

    @Post()
    LoginUser() {
        return {}
    }


    @Put(':id')
    updateUserById(@Param('id') id: string, @Body() updateUserDto: updateUserDto) {
        return this.usersService.updateUser(parseInt(id), updateUserDto);
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string) {
        return this.usersService.removeUser(parseInt(id));
    }
}
