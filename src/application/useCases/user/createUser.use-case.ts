import { CreateUserDto } from "src/application/dto/User/create-user.dto";
import { User } from "src/domain/entities/user";
import { IUserService } from "src/domain/interfaces/IUserService";

export class CreateUserUseCase {
  constructor(private userService: IUserService) {}

  async execute(user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }
}
