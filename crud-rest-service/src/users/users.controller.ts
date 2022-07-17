import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.usersService.findAll(limit, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() response) {
    const user = this.usersService.findOne(id);
    if (!user) {
      return response.status(404).send('Not Found');
    }
    return response.status(200).send(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() response,
  ) {
    const user = this.usersService.findOne(id);
    if (!user) {
      return response.status(404).send('Not Found');
    }
    const updUser = this.usersService.update(id, updateUserDto);
    return response.status(200).send(updUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response) {
    const user = this.usersService.findOne(id);
    if (!user) {
      return response.status(404).send('Not Found');
    }
    this.usersService.remove(id);
    if (user.isDeleted) {
      return response.status(200).send('The object was successfully deleted');
    }
    return response.status(404).send('Not Found');
  }
}
