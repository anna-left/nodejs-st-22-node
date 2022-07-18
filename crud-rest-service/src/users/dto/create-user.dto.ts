import { IsBoolean, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly login: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsNumber()
  @Min(4)
  @Max(130)
  readonly age: number;
  @IsBoolean()
  readonly isDeleted: boolean;
}
