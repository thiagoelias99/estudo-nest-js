import { IsString } from 'class-validator'
import { User } from 'src/users/entities/user.entity'

export class Product {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly category: string,
    public readonly images: ProductImage[],
    public readonly characteristics: ProductCharacteristic[],
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly user?: User
  ) { }
}

export class ProductImage {
  @IsString() url: string
  @IsString() description: string
}

export class ProductCharacteristic {
  @IsString() name: string
  @IsString() description: string
}
