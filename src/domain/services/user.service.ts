import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/application/dto/User/create-user.dto";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { User } from "../entities/user";
import { IUserService } from "../interfaces/IUserService";

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly repository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.repository.create(createUserDto);
  }

  async get(userId: string): Promise<User> {
    return await this.repository.get(userId);
  }
}
