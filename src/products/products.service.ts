import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

const products: Product[] = [];

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) {
    const product = createProductDto.toProduct();
    products.push(product);
    return product;
  }

  async findAll() {
    return products;
  }

  async findOne(id: string) {
    return products.find((product) => product.id === id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    console.log(id, updateProductDto);
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
