import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto })
  }

  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        orders: true,
        _count: true      
      }
    })
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        orders: true
      }
    })
  }

  async findOneByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } })
  }

  async update(id: string, data: UpdateUserDto) {
    return await this.prisma.user.update({ where: { id }, data })
  }

  async remove(id: string) {
    return await this.prisma.user.delete({ where: { id } })
  }
}