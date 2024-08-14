import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductInfoDto } from './productinfo.dto';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}


         addProduct(product: ProductInfoDto): Promise<Product> {
            const newProduct = this.productRepository.create({ ... product})
            return this.productRepository.save(newProduct);
        }

        async findAllProducts(): Promise<Product[]> {
            return this.productRepository.find()
        }

        async findOneProduct(id: number): Promise<Product> {
            return this.productRepository.findOne({where: {id}});
        }    

        update(id: number, updateproductdetails: ProductInfoDto){
            return this.productRepository.update({id}, {...updateproductdetails});
        }

        delete(id: number) {
            return this.productRepository.delete({id});
        }
}
