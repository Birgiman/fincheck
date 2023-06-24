import { Global, Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repositories';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService, UsersRepository],
  exports: [UsersRepository],
})
export class DatabaseModule {}
