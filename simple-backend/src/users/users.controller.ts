import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('type') type: string) {
        return 'All users';
    }

    @Get(':id') 
    getUsersById(@Param('id') id: string) {
        return 'User by id';
    }

    @Post()
    createUser() {
        return 'Create user';
    }

    @Put(':id')
    updateUserById() {
        return 'Update user by id';
    }

    @Delete(':id')
    deleteUserById() {
        return 'Delete user by id';
    }
}
