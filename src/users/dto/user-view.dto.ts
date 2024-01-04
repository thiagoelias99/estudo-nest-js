import { Order, User } from '@prisma/client'

export class UserViewDto {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.totalOrders = user.orders.length
  }

  id: string
  name: string
  email: string
  totalOrders: number
}