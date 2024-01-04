import { User } from '@prisma/client'
import { UserViewDto } from './user-view.dto'

export class UserListDto{
  constructor(users: User[]){
    this.users = users.map((user) => new UserViewDto(user))
    this.count = this.users.length
  }

  users: UserViewDto[]
  count: number
}