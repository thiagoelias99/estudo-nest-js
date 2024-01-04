import { IsOptional, IsString, IsUUID } from 'class-validator'

export class UpdateUserDto {
  @IsUUID() id: string
  @IsString() @IsOptional() name: string
}
