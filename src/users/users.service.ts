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

  findOne(id: string) {
    return users[id];
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    console.log(id, updateUserDto);
    return;
  }

  remove(id: string) {
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);

    return;
  }
}
