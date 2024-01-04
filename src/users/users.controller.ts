import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { DeleteUserDto } from './dto/delete-user.dto'

//Controllers devem receber requisições e retornar respostas
//Controllers devem chamar os services
//Controllers devem receber e retornar os dados utilizando DTOs

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto)
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id)
  }

  @Patch()
  async update(@Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(updateUserDto)
  }

  @Delete()
  async remove(@Body() deleteUserDto: DeleteUserDto) {
    return await this.usersService.remove(deleteUserDto)
  }
}
