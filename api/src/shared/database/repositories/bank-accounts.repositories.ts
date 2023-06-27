import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  // create(createDto: Prisma.UserCreateArgs) {
  //   return this.prismaService.user.create(createDto);
  // }

  create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto);
  }
}
