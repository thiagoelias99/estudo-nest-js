import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './entities/product.entity'
import { ProductViewDto } from './dto/produt-view.dto'
import { ProductListDto } from './dto/product-list.dto'
import { UsersService } from 'src/users/users.service'

const products: Product[] = []

@Injectable()
export class ProductsService {
  constructor(private readonly usersService: UsersService) { }

  async create(createProductDto: CreateProductDto) {
    const product = createProductDto.toProduct()
    products.push(product)
    return product
  }

  async findAll() {
    const productList: Promise<ProductViewDto>[] = products.map(async product => {
      console.log(product)
      return (
        new ProductViewDto(
          product,
          await this.usersService.findOne(product.userId)
        )
      )
    })
    const resolvedProductList = await Promise.all(productList)
    return new ProductListDto(resolvedProductList)
  }

  async findOne(id: string) {
    const product = products.find((product) => product.id === id)
    return new ProductViewDto(
      product,
      await this.usersService.findOne(product.id)
    )
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    console.log(id, updateProductDto)
    return `This action updates a #${id} product`
  }

  async remove(id: string) {
    return `This action removes a #${id} product`
  }
}
