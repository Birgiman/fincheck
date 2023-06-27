import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  // create(createDto: Prisma.UserCreateArgs) {
  //   return this.prismaService.user.create(createDto);
  // }

  findMany(findManyDto: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findManyDto);
  }
}
