import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {}

  async login({ firstName, lastName, password }: LoginUserDto) {
    const existingUser = await this.prismaService.identity.findFirst({
      where: {
        firstName: firstName,
        lastName: lastName,
      },
    });

    if (!existingUser) {
      throw new UnauthorizedException();
    }

    const passwordMatched = await argon.verify(existingUser.password, password);

    if (!passwordMatched) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: existingUser.id,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
    };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
      }),
    };
  }
}
