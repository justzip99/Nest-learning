import { AuthuserDto } from './Authuser.dto';
import { PartialType } from '@nestjs/mapped-types';

export class updateUserDto extends PartialType(AuthuserDto) {}