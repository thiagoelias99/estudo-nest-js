import { Injectable } from '@nestjs/common'
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

import { UsersService } from '../users/users.service'

@Injectable()
@ValidatorConstraint({ async: true })
export class UserExistsValidator implements ValidatorConstraintInterface {
  constructor(private userService: UsersService) { }

  //Função que valida se o usuário existe
  async validate(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    try {
      //'value' é recebido pelo decorator
      const user = await this.userService.findOne(value)
      //Retorna true se o usuário existir (validação passa)
      return !!user
    } catch {
      return false
    }
  }

  //Mensagem de erro
  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} not exists.`
  }
}

//Cria o decorator que valida se o usuário existe
export const UserExists = (validationOptions?: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: UserExistsValidator,
    })
  }
}
