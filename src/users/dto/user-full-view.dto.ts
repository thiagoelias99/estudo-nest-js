import { Product } from 'src/products/entities/product.entity'
import { User } from '../entities/user.entity'
import { Order } from '@prisma/client'

export class UserFullViewDto{
  constructor(user){
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.createdAt = user.createdAt
    this.updatedAt = user.updatedAt
    this.orders = user.orders
  }

  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
  orders: Order[]
}