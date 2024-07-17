import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { SearchDto } from './dto/search.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('search')
  async search(@Query() query: SearchDto) {
    return this.usersService.findUsers(query.email, query.number);
  }
}
