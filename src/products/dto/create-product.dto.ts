import { v4 as uuidv4 } from 'uuid';

import {
  Product,
  ProductCharacteristic,
  ProductImage,
} from '../entities/product.entity';

export class CreateProductDto {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly category: string,
    public readonly images?: ProductImage[] | undefined,
    public readonly characteristics?: ProductCharacteristic[] | undefined,
  ) {}

  toProduct() {
    return new Product(
      uuidv4(),
      this.name,
      this.description,
      this.price,
      this.category,
      this.images || [],
      this.characteristics || [],
      new Date(),
      new Date(),
    );
  }
}
