import { IsString, IsEmail } from 'class-validator'
import { UniqueEmail } from '../../validation/unique-email.validation'

export class CreateUserDto {
  @IsString() name: string

  @IsEmail() @UniqueEmail() public readonly email: string

  @IsString() public readonly password: string
}
