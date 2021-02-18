import { ProductService } from './product.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {

    constructor(private readonly ProductService: ProductService) {}

    @Get(':id')
    async findOnt(@Param() id: number): Promise<any> {
        return 
    }

    @Post()
    async saveProduct(@Body() product: ProductDto): Promise<any> {
        return await this.ProductService.saveProduct(product);
    }
}
