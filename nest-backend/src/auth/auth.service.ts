import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // 1. Buscar usuário pelo e-mail no banco
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    // 2. Se o usuário não existir, lança erro 401
    if (!user) {
      throw new UnauthorizedException('E-mail ou senha inválidos');
    }

    // 3. Verificar senha
    if (user.password !== password) {
      throw new UnauthorizedException('E-mail ou senha inválidos');
    }

    // 4. Retornar dados do usuário autenticado (ou token JWT)
    const { password: _, ...userWithoutPassword } = user;
    return {
      message: 'Login realizado com sucesso!',
      user: userWithoutPassword,
    };
  }
}
