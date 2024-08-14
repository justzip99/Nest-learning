import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ProductInfoDto } from './productinfo.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productservice: ProductService) {}


    @Post('add')
    addProduct(@Body() product: ProductInfoDto) {
        return this.productservice.addProduct(product);
    }

    @Get('all')
    findAllProducts() {
        return this.productservice.findAllProducts();
    }

    @Get(':id')
    findOneProduct(@Query('id')id : number) {
        return this.productservice.findOneProduct(id);
    }

    @Put(':id')
    updateProduct(@Query('id') id: number, @Body() updateProduct: ProductInfoDto){
        return this.productservice.update(id, updateProduct)
    }

    @Delete(':id')
    deleteProduct(@Query('id') id: number) {
        return this.productservice.delete(id);
    }
}
