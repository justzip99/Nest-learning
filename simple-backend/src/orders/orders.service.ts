import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { Repository } from 'typeorm';
import { CustomerOrder } from './customerorder.dto';

@Injectable()
export class OrdersService {
    constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {}

    addOrder(orderInfo: CustomerOrder) {
        const newOrder = this.orderRepository.create({...orderInfo});
        return this.orderRepository.save(newOrder);
    }

    updateOrder(id: number, updateOrderDetails: CustomerOrder) {
        return this.orderRepository.update({id}, {...updateOrderDetails});
    }

    deleteOrder(id: number) {
        return this.orderRepository.delete(id);
    }

    findOrders() {
        return this.orderRepository.find();
    }

    findOneOrder(id: number) {
        return this.orderRepository.findOne({where: {id}});
    }

}
