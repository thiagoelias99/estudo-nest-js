import { IsUUID } from 'class-validator'
import { UserExists } from 'src/validation/user-exists.validation'

export class CreateOrderDto {
  @IsUUID() @UserExists()  userId: string
}
