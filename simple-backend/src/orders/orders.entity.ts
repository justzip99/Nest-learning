import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    userId: string;
    
    @Column()
    products: string;
    
    @Column()
    totalPrice: number;

    @Column()
    status: string;
}