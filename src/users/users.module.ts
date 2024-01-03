import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { UniqueEmailValidator } from '../validation/unique-email.validation'
import { UserExistsValidator } from 'src/validation/user-exists.validation'
import { DatabaseModule } from 'src/database/database.module'
import { UserRepository } from './users.repository'

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UniqueEmailValidator,
    UserExistsValidator,
    UserRepository
  ],
  exports: [UsersService, UserRepository]
})
export class UsersModule { }
