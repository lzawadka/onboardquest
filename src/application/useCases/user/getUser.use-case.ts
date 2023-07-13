import { User } from "src/domain/entities/user";
import { IUserService } from "src/domain/interfaces/IUserService";

export class GetUserUseCase {
  constructor(private userService: IUserService) {}

  async execute(userId: string): Promise<User> {
    return await this.userService.get(userId);
  }
}
