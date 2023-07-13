import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Param,
} from "@nestjs/common";
import { User } from "src/domain/entities/user";
import { Context } from "vm";
import { CreateUserDto } from "../dto/User/create-user.dto";
import { UserService } from "../../domain/services/user.service";
import { CreateUserUseCase } from "../useCases/user/createUser.use-case";
import { GetUserUseCase } from "../useCases/user/getUser.use-case";

@Controller("users")
export default class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase
  ) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    try {
      return await this.createUserUseCase.execute(user);
    } catch (error) {
      throw new HttpException(
        "Une erreur est survenue",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get()
  async get(@Param() userId: string): Promise<User> {
    try {
      return await this.getUserUseCase.execute(userId);
    } catch (error) {
      throw new HttpException(
        "Une erreur est survenue",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
