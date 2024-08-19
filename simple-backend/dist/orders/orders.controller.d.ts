import { OrdersService } from './orders.service';
import { CustomerOrder } from './customerorder.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    addOrder(orderInfo: CustomerOrder): Promise<import("./orders.entity").Order>;
    updateOrder(orderInfo: CustomerOrder, id: number): Promise<import("typeorm").UpdateResult>;
    deleteOrder(id: number): Promise<import("typeorm").DeleteResult>;
    findOrders(): Promise<import("./orders.entity").Order[]>;
    findOneOrder(id: number): Promise<import("./orders.entity").Order>;
}
