import { Module } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsController } from './products.controller'
import { UsersService } from 'src/users/users.service'
import { UserRepository } from 'src/users/users.repository'
import { DatabaseModule } from 'src/database/database.module'
import { UsersModule } from 'src/users/users.module'

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
