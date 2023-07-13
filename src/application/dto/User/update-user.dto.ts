import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  email?: string;

  @IsString()
  @IsNotEmpty()
  password?: string;

  @IsNumber()
  @IsNotEmpty()
  companyId?: string;

  @IsString()
  @IsNotEmpty()
  role?: string;

  @IsNumber()
  @IsNotEmpty()
  currentChapterId?: number;

  @IsNumber()
  @IsNotEmpty()
  currentChapterStepId?: number;

  @IsNumber({}, { each: true })
  @IsNotEmpty()
  validatedChapterId?: number[];
}
