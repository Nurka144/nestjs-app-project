import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.model';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>) {}

    async saveProduct(productData: ProductDto): Promise<any> {
        const createProductData = new this.ProductModel({
            title: productData.title,
            description: productData.description
        })
        return createProductData.save();
    }

    async findOne(productId: number): Promise<any> {
        let findProduct = await this.ProductModel.find({"_id": productId});
        return findProduct;
    }
}
