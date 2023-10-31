import { Injectable } from '@nestjs/common'
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator'

import { UsersService } from '../users.service'

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
    constructor(private userService: UsersService) { }

    async validate(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: any,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        validationArguments?: ValidationArguments,
    ): Promise<boolean> {
        const user = await this.userService.existsWithEmail(value)
        return !user
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return `${validationArguments.property} already exists.`
    }
}

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
