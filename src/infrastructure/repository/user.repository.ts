import { User } from "src/domain/entities/user";
import UserModel from "../models/user.model";
import { CreateUserDto } from "src/application/dto/User/create-user.dto";

export class UserRepository {
  get(userId: string): User | PromiseLike<User> {
    throw new Error("Method not implemented.");
  }
  async create(user: CreateUserDto): Promise<User> {
    const newUser = new UserModel(user);
    return await newUser;
  }
}
