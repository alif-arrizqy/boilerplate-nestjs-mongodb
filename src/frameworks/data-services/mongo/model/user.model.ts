import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
