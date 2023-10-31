import { IsString, IsEmail } from 'class-validator';
import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { UniqueEmail } from '../validation/unique-email.validation';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  @UniqueEmail()
  // @UniqueEmail({ message: 'Já existe um usuário com este e-mail' })
  public readonly email: string;

  @IsString()
  public readonly password: string;

  toUser(): User {
    return new User(uuidv4(), this.name, this.email, this.password);
  }
}
