import { Injectable } from '@nestjs/common'
import { CreateOrderDto } from './dto/create-order.dto'
import { OrderRepository } from './orders.repository'
import { UpdateOrderTotalDto } from './dto/update-order.dto'

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) { }

  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto)
  }

  findAll() {
    return this.orderRepository.findAll()
  }

  findOne(id: string) {
    return this.orderRepository.findOne(id)
  }

  update(data: UpdateOrderTotalDto) {
    return this.orderRepository.updateOrderValue(data.id, data.total)
  }

  remove(id: number) {
    return `This action removes a #${id} order`
  }
}
