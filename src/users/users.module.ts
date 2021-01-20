import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.model';
import { UsersService } from './users.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
