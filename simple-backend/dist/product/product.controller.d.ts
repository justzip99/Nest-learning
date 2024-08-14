import { ProductInfoDto } from './productinfo.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productservice;
    constructor(productservice: ProductService);
    addProduct(product: ProductInfoDto): Promise<import("./product.entity").Product>;
    findAllProducts(): Promise<import("./product.entity").Product[]>;
    findOneProduct(id: number): Promise<import("./product.entity").Product>;
    updateProduct(id: number, updateProduct: ProductInfoDto): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: number): Promise<import("typeorm").DeleteResult>;
}
