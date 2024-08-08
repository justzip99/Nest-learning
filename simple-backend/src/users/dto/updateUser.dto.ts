import { Min } from 'class-validator';
import {createUserDto} from './createUser.dto';
import { PartialType } from '@nestjs/mapped-types';

export class updateUserDto extends PartialType(createUserDto) {
    name: string;
    
    gender: 'male' | 'female';

    age: number;
}