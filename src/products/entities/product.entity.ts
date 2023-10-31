export class Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly category: string,
    public readonly images: ProductImage[],
    public readonly characteristics: ProductCharacteristic[],
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}

export class ProductImage {
  constructor(
    public readonly url: string,
    public readonly description: string,
  ) {}
}

export class ProductCharacteristic {
  constructor(
    public readonly name: string,
    public readonly description: string,
  ) {}
}
