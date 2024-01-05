import { IsNumber, IsUUID } from 'class-validator'
import { OrderExists } from 'src/validation/order-exists.validation'

export class UpdateOrderTotalDto {
  @IsUUID() @OrderExists() id: string
  @IsNumber() total: number
}
