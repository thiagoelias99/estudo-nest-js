import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

const users: User[] = [];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const user = createUserDto.toUser();
    users.push(user);
    return user;
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    return users[id];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(id, updateUserDto);
    return '';
  }

  remove(id: number) {
    return users.splice(id, 1);
  }
}
