import { Module } from '@nestjs/common';
import { UsersController } from './models/users/users.controller';
import { UsersService } from './models/users/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
