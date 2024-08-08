import { IsEnum, IsInt, IsString, Max, Min} from "class-validator";

export class createUserDto {

     id: number;

     @IsString()
     name: string;
 
     @IsEnum(['male', 'female'], {message: 'Gender must be male or female'}) 
     gender: 'male' | 'female';

     @IsInt()
     @Min(18, {message: 'Users age must be at least  years old'})
     @Max(50, {message: 'Users age cannot exceed 50 years old'})
     age: number;
}
