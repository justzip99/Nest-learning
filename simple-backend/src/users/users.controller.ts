import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/updateUser.dto';
import { WallGuard } from 'src/wall/wall.guard';

@Controller('users')
export class UsersController {  
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(@Query('gender') gender: string) {
        const service = new UsersService()
        return service.getUsers();
    }

    @Get(':id') 
    getUsersById(@Param('id',ParseIntPipe) id: number) {
        try {
            return this.usersService.getUser(id);
        } catch (err) {
            throw new NotFoundException()
        }
    }

    @Post()
    RegisterUser(@Body(new ValidationPipe) createUserDto: createUserDto) {
        return this.usersService.createUser(createUserDto)
    };

    @UseGuards(WallGuard)
    @Put(':id')
    updateUserById(@Param('id') id: string, @Body() updateUserDto: updateUserDto) {
        return this.usersService.updateUser(parseInt(id), updateUserDto);
    }


    @Delete(':id')
    deleteUserById(@Param('id') id: string) {
        return this.usersService.removeUser(parseInt(id));
    }
}
