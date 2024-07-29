import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('gender') gender: 'male' | 'female') {
        const service = new UsersService()
        return service.getUsers(gender);
    }

    @Get(':id') 
    getUsersById(@Param('id') id: string) {
        return {id};
    }

    @Post()
    RegisterUser(@Body() createUserDto: createUserDto) {
        return {
            name: createUserDto.name
        }
    };

    @Post()
    LoginUser() {
        return {}
    }


    @Put(':id')
    updateUserById(@Param('id') id: string, @Body() createUserDto: createUserDto) {
        return {
            id,
            name: createUserDto.name
        };
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string) {
        return {
             'Delete user id': id
        };
    }
}
