import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { UserViewDto } from './dto/user-view.dto'
import { UserListDto } from './dto/user-list.dto'
import { v4 as uuidv4 } from 'uuid'

const users: User[] = []

//Services devem conter a lógica de negócio da aplicação
//Services devem chamar os repositories
//Services devem utilizar o domínio da aplicação, Entities e DTOs

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const user = new User(
      uuidv4(),
      createUserDto.name,
      createUserDto.email,
      createUserDto.password
    )
    users.push(user)
    return new UserViewDto(user)
  }

  async findAll() {
    return new UserListDto(users)
  }

  async findOne(id: string) {
    return new UserViewDto(users.find((user) => user.id === id))
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    console.log(id, updateUserDto)
    return
  }

  async remove(id: string) {
    const index = users.findIndex((user) => user.id === id)
    users.splice(index, 1)

    return
  }

  async existsWithEmail(email: string) {
    return users.some((user) => user.email === email)
  }
}
