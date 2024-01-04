import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { CreateProductDto } from './dto/create-product.dto'

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateProductDto) {
    return await this.prisma.product.create({
      data: {
        description: data.description,
        name: data.name,
        price: data.price,
      }
    })
  }

  async findAll() {
    return await this.prisma.product.findMany({

    })
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({
      where: { id },

    })
  }
}