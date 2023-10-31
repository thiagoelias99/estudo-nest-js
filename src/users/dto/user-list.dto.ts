import { UserViewDto } from './user-view.dto'

export class UserListDto{
    constructor(users){
        this.users = users.map((user) => new UserViewDto(user))
        this.count = this.users.length
    }

    users: UserViewDto[]
    count: number
}