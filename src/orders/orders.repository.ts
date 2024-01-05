import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { Order } from '@prisma/client'

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(createOrderDto: CreateOrderDto) {
    const pendingStatus = await this.prisma.orderStatus.findFirst({ where: { name: 'pending' } })

    return this.prisma.user.update({
      where: { id: createOrderDto.userId },
      data: {
        orders: {
          create: {
            total: 0,
            statusId: pendingStatus.id
          }
        }
      }
    })
  }

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany()
  }

  async findOne(id: string): Promise<Order> {
    return this.prisma.order.findUnique(
      {
        where: { id },
        include: {
          user: true,
        }
      })
  }

  async updateOrderValue(id: string, total: number): Promise<Order> {
    return this.prisma.order.update({
      where: { id },
      data: { total }
    })
  }
}