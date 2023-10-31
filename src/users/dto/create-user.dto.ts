import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export class CreateUserDto {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
  ) {
  }

  public createdAt: Date = new Date();

  toUser(): User {
    return new User(uuidv4(), this.name, this.email, this.password);
  }
}
