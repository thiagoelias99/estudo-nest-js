import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './entities/product.entity'
import { ProductViewDto } from './dto/produt-view.dto'
import { ProductListDto } from './dto/product-list.dto'
import { UsersService } from 'src/users/users.service'
import { ProductRepository } from './products.repository'

const products: Product[] = []

@Injectable()
export class ProductsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly productRepository: ProductRepository
  ) { }

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto)
  }

  async findAll() {
    // const productList: Promise<ProductViewDto>[] = products.map(async product => {
    //   console.log(product)
    //   return (
    //     new ProductViewDto(
    //       product,
    //       await this.usersService.findOne(product.userId)
    //     )
    //   )
    // })
    // const resolvedProductList = await Promise.all(productList)

    const products = await this.productRepository.findAll()
    // return new ProductListDto(products)
    return ''
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id)
    // return new ProductViewDto(product)
    return ''
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    console.log(id, updateProductDto)
    return `This action updates a #${id} product`
  }

  async remove(id: string) {
    return `This action removes a #${id} product`
  }
}
