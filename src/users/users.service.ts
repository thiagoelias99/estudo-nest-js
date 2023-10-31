import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { UserViewDto } from './dto/user-view.dto'
import { UserListDto } from './dto/user-list.dto'

const users: User[] = []

@Injectable()
export class UsersService {
    async create(createUserDto: CreateUserDto) {
        const user = createUserDto.toUser()
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
