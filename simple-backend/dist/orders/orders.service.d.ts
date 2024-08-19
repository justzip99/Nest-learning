import { Order } from './orders.entity';
import { Repository } from 'typeorm';
import { CustomerOrder } from './customerorder.dto';
export declare class OrdersService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    addOrder(orderInfo: CustomerOrder): Promise<Order>;
    updateOrder(id: number, updateOrderDetails: CustomerOrder): Promise<import("typeorm").UpdateResult>;
    deleteOrder(id: number): Promise<import("typeorm").DeleteResult>;
    findOrders(): Promise<Order[]>;
    findOneOrder(id: number): Promise<Order>;
}
