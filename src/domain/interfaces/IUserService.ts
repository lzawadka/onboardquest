import { CreateUserDto } from "src/application/dto/User/create-user.dto";
import { User } from "../entities/user";

export interface IUserService {
  get(userId: string): Promise<User>;
  create(createUserDto: CreateUserDto): Promise<User>;
}
