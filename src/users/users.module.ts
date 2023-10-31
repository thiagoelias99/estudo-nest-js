import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { UniqueEmailValidator } from '../validation/unique-email.validation'
import { UserExistsValidator } from 'src/validation/user-exists.validation'

@Module({
    controllers: [UsersController],
    providers: [UsersService, UniqueEmailValidator, UserExistsValidator],
})
export class UsersModule { }
