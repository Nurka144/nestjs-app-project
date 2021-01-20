import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://app-flutter:nurka111222111@app.u0kg2.mongodb.net/app?retryWrites=true&w=majority'), AuthModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
