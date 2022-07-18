import { IsBoolean, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly login: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(4)
  @Max(130)
  readonly age: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly isDeleted: boolean;
}
