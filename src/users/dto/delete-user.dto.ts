import { IsOptional, IsString, IsUUID } from 'class-validator'

export class DeleteUserDto {
  @IsUUID() id: string
  @IsString() password: string
}
