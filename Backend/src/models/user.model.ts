import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';


export class User extends Typegoose {
    @prop({ unique: true })
    hashedLogin!: string;
    @prop()
    hashedPassword!: string;
}

export const UserModel = new User().getModelForClass(User, {
    existingMongoose: mongoose,
    schemaOptions: { collection: 'users' }
})