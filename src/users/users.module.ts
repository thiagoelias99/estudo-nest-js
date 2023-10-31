import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UniqueEmailValidator } from './validation/unique-email.validation'

@Module({
  controllers: [UsersController],
  providers: [UsersService, UniqueEmailValidator],
})
export class UsersModule {}
