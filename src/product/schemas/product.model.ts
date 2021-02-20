import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product{
    @Prop({required: true})
    title: string

    @Prop({required: true})
    description: string

    @Prop({default: Date.now()})
    create_date: Date

    @Prop({default: Date.now()})
    update_date: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);