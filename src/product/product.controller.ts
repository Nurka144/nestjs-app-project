import { Controller, Get, Param } from '@nestjs/common';

@Controller('product')
export class ProductController {

    @Get(':id')
    async findOnt(@Param() id: number): Promise<any> {
        return {product: 1}
    }
}
