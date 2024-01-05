import { Injectable } from '@nestjs/common'
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

import { OrdersService } from 'src/orders/orders.service'

@Injectable()
@ValidatorConstraint({ async: true })
export class OrderExistsValidator implements ValidatorConstraintInterface {
  constructor(private orderService: OrdersService) { }

  async validate(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    console.log(value)
    try {
      console.log(value)
      const order = await this.orderService.findOne(value)
      //Retorna true se a order existir (validação passa)
      console.log(order)
      return !!order
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //Mensagem de erro
  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} not exists.`
  }
}

//Cria o decorator que valida se o usuário existe
export const OrderExists = (validationOptions?: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: OrderExistsValidator,
    })
  }
}
