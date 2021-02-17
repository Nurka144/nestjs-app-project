import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product{
    @Prop({required: true})
    title: String

    @Prop({required: true})
    description: String

    @Prop({required: true, default: Date.now()})
    create_date: Date

    @Prop({required: true, default: Date.now()})
    update_date: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);