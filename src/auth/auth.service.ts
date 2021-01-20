import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { User, UserDocument } from '../users/schemas/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>, private readonly jwt: JwtService) {}

    async register(body: RegisterDto): Promise<any> {
        let {[0]: findUser} = await this.UserModel.find({email: body.email}).exec();
        if (findUser) {
            throw new HttpException('Пользователь существует', HttpStatus.BAD_REQUEST);
        }
        const hashPassword: string = await hash(body.password, 10);
        const createUser = new this.UserModel({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashPassword
        });
        return createUser.save();
    } 

    async login(body: LoginDto): Promise<any> {
        const {[0]: findUser}: any = await this.UserModel.find({email: body.email}).exec();
        if (!findUser) {
            throw new HttpException('Не верные данные', HttpStatus.BAD_REQUEST);
        }
        const comparePassword: boolean = await compare(body.password, findUser.password);
        if(!comparePassword) {
            throw new HttpException('Не верные данные', HttpStatus.BAD_REQUEST);
        }
        const signToken: string = await this.jwt.sign({id: findUser._id});
        const updateUser = await this.UserModel.updateOne({email: body.email}, {$set: {access_token: signToken}});
        if (updateUser.nModified == 1) {
            return {token: signToken};
        } else {
            throw new HttpException('Ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
