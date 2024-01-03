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
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userService: UsersService) { }

  //Função que valida se o email não existe
  async validate(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    //'value' é recebido pelo decorator
    const user = await this.userService.existsWithEmail(value)
    //Retorna false se o email já existir (falha na validação)
    return !user
  }

  //Mensagem de erro
  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} already exists.`
  }
}

//Cria o decorator que valida se o email não existe
export const UniqueEmail = (validationOptions?: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    })
  }
}
