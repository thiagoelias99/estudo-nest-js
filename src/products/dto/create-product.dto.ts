import { v4 as uuidv4 } from 'uuid'

import {
    Product,
    ProductCharacteristic,
    ProductImage,
} from '../entities/product.entity'
import {
    IsArray,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    ValidateNested,
} from 'class-validator'
import { Type } from 'class-transformer'
import { UserExists } from 'src/validation/user-exists.validation'

export class CreateProductDto {
    @IsString() name: string
    @IsUUID() @UserExists() userId: string
    @IsString() description: string
    @IsNumber() price: number
    @IsString() category: string
    @ValidateNested() @IsArray() @Type(() => ProductImage) @IsOptional() images?: ProductImage[] | undefined
    @ValidateNested() @IsArray() @Type(() => ProductCharacteristic) @IsOptional() characteristics?: ProductCharacteristic[] | undefined

    toProduct() {
        return new Product(
            uuidv4(),
            this.userId,
            this.name,
            this.description,
            this.price,
            this.category,
            this.images || [],
            this.characteristics || [],
            new Date(),
            new Date(),
        )
    }
}
