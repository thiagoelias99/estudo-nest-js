import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { UserViewDto } from './dto/user-view.dto'
import { UserListDto } from './dto/user-list.dto'
import { UserRepository } from './users.repository'

const users: User[] = []

//Services devem conter a lógica de negócio da aplicação
//Services devem chamar os repositories
//Services devem utilizar o domínio da aplicação, Entities e DTOs

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto)
    return new UserViewDto(user)
  }

  async findAll() {
    const users = await this.userRepository.findAll()
    return new UserListDto(users)
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id)
    return new UserViewDto(user)
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.update(id, updateUserDto)
    return new UserViewDto(user)
  }

  async remove(id: string) {
    return await this.userRepository.remove(id)
  }

  async existsWithEmail(email: string) {
    const user = await this.userRepository.findOneByEmail(email)
    return !!user
  }
}
