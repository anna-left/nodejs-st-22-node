import {
  PipeTransform,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';

import { CreateUserDto, UserSchema } from './dto/create-user.dto';

export class CreateUserValidatorPipe implements PipeTransform<CreateUserDto> {
  public transform(
    value: CreateUserDto,
    metadata: ArgumentMetadata,
  ): CreateUserDto {
    console.log(metadata);
    const result = UserSchema.validate(value);
    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }
    return value;
  }
}