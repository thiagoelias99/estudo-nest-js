import { IsString, IsEmail } from 'class-validator';
import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;

  toUser(): User {
    return new User(uuidv4(), this.name, this.email, this.password);
  }
}
