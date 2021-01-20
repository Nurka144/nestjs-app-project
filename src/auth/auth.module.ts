import { User, UserSchema } from './../users/schemas/user.model';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]), 
    JwtModule.register({secret: 'this_secret_key', signOptions: {expiresIn: '12h'}})
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
