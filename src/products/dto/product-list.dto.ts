import { Product } from '../entities/product.entity'
import { ProductViewDto } from './produt-view.dto'

export class ProductListDto{
  constructor(products: ProductViewDto[]){
    this.products = products
    this.count = this.products.length
  }

  products: ProductViewDto[]
  count: number
}