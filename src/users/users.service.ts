import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

const users: User[] = []

@Injectable()
export class UsersService {
    async create(createUserDto: CreateUserDto) {
        const user = createUserDto.toUser()
        users.push(user)
        return user
    }

    async findAll() {
        return users
    }

    async findOne(id: string) {
        return users.find((user) => user.id === id)
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
