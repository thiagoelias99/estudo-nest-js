import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

const products: Product[] = [];

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    const product = createProductDto.toProduct();
    products.push(product);
    return product;
  }

  findAll() {
    return products;
  }

  findOne(id: string) {
    return products.find((product) => product.id === id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    console.log(id, updateProductDto);
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
