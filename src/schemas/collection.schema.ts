import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CollectionDocument = Collection & Document;

@Schema()
export class Collection {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  category: string;

  @Prop()
  value: number;

  @Prop({ type: Date })
  year: Date;

  @Prop()
  condition: string;

  @Prop()
  location: string;

  @Prop()
  image: string;
  
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);