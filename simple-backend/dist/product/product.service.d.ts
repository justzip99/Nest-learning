import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductInfoDto } from './productinfo.dto';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    addProduct(product: ProductInfoDto): Promise<Product>;
    findAllProducts(): Promise<Product[]>;
    findOneProduct(id: number): Promise<Product>;
    update(id: number, updateproductdetails: ProductInfoDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
