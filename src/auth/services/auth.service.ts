import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users.service';
import { PayloadToke } from '../models/toke.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        return user;
      }
    }

    return null;
  }

  generateJWT(user: User) {
    const payload: PayloadToke = { role: user.role, sub: user.id };
    const { password, ...rta } = user.toJSON();
    return {
      access_toke: this.jwtService.sign(payload),
      rta,
    };
  }
}
