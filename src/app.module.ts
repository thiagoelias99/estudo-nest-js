import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { PrismaService } from './database/prisma.service'

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule { }
