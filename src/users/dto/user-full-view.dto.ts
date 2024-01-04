import { Product } from 'src/products/entities/product.entity'
import { User } from '../entities/user.entity'

export class UserFullViewDto{
  constructor(user: User){
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.createdAt = user.createdAt
    this.updatedAt = user.updatedAt
  }

  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}