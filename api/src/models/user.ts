import mongoose, { Document, Model } from "mongoose";
import { genSaltSync, hashSync, compareSync } from "bcrypt";

export interface IUser extends Document {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  gender?: string;
  phone?: string;
  token?: string;
  verified?: boolean;
  code?: string;
  createdOn?: Date;
  updatedOn?: Date;
  encryptPassword: (password: string) => string;
  validPassword: (password: string) => boolean;
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    phone: String,
    token: String,
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    code: String,
  },
  { timestamps: true }
);

UserSchema.methods.encryptPassword = function (password: string) {
  return hashSync(password, genSaltSync(10));
};

UserSchema.methods.validPassword = function (password: string) {
  return compareSync(password, this.password);
};

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
