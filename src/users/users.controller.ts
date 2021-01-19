import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post()
    findUser(): string {
        return 'This action return user'
    }
}
