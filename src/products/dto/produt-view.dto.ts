import { UserViewDto } from 'src/users/dto/user-view.dto'
import { Product, ProductCharacteristic, ProductImage } from '../entities/product.entity'
import { UsersService } from 'src/users/users.service'

export class ProductViewDto{
  constructor(product: Product, user: UserViewDto){
    this.id = product.id
    this.name = product.name
    this.description = product.description
    this.price = product.price
    this.category = product.category
    this.images = product.images
    this.characteristics = product.characteristics
    this.user = user
  }

  id: string
  name: string
  price: number
  description: string
  images: ProductImage[]
  characteristics: ProductCharacteristic[]
  category: string
  user: UserViewDto
}