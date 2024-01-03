import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
