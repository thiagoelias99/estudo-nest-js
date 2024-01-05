import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersController } from './orders.controller'
import { OrderRepository } from './orders.repository'
import { DatabaseModule } from 'src/database/database.module'
import { OrderExistsValidator } from 'src/validation/order-exists.validation'

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [
    OrdersService, 
    OrderRepository,
    OrderExistsValidator
  ],
})
export class OrdersModule {}
