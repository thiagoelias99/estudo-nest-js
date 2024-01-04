import { Product } from 'src/products/entities/product.entity'

export class User {
  id?: string
  name: string
  email: string
  password?: string
  // order?: Order[]
  createdAt?: Date
  updatedAt?: Date
}
