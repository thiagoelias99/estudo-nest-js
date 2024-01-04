import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { PrismaService } from './database/prisma.service'
import { OrdersModule } from './orders/orders.module'

@Module({
  imports: [UsersModule, OrdersModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule { }
