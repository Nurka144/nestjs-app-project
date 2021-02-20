import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product{
    @Prop({required: true})
    title: String

    @Prop({required: true})
    description: String

    @Prop({default: Date.now()})
    create_date: Date

    @Prop({default: Date.now()})
    update_date: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);