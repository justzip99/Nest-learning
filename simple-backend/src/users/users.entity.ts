import { Optional } from '@nestjs/common';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    userName: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column(Optional)
    address: string;
}