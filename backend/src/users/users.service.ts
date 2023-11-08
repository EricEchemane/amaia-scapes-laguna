import { HttpException, Injectable, Logger } from '@nestjs/common';
import { RegisterUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async register({ firstName, lastName, password }: RegisterUserDto) {
    const userAlreadyRegstered = await this.prismaService.identity.findFirst({
      where: {
        firstName: firstName,
        lastName: lastName,
      },
    });

    if (userAlreadyRegstered) {
      Logger.log('Someone tried to register with an existing user');
      throw new HttpException('This user is already registered', 409);
    }

    const createdUser = await this.prismaService.identity.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        password: await argon.hash(password),
      },
    });

    return new UserEntity(createdUser);
  }

  protectedExampleFindAll() {
    return this.prismaService.identity.findMany({
      take: 10,
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
