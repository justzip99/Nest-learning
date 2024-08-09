import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthuserDto } from './dto/request/Authuser.dto';
import { UsersService } from './users.service';
import { updateUserDto } from './dto/request/updateUser.dto';
import * as bcrypt from 'bcrypt';
@Controller('users')
export class UsersController {  
    constructor(private usersService: UsersService) {}

    @Post('register')
    async RegisterUser(@Body(new ValidationPipe) AuthuserDto: AuthuserDto) {
        const hashedPassword = await bcrypt.hash(AuthuserDto.password, 10);
        return this.usersService.createUser(AuthuserDto);
    } 

    @Post('login')
    async LoginUser(@Body() createUserDto: AuthuserDto) {

    }

    @Put(':id')
    updateUserById(@Param('id') id: string, @Body() updateUserDto: updateUserDto) {
        try {
        return this.usersService.updateUser(parseInt(id), updateUserDto)
     } catch (err) {
            throw new NotFoundException("User not found");
        }
    }

    
}
