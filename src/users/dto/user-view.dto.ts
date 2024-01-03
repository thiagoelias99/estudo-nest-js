import { User } from '../entities/user.entity'

export class UserViewDto{
  constructor(user: User){
    this.id = user.id
    this.name = user.name
    this.email = user.email
  }

  id: string
  name: string
  email: string
}