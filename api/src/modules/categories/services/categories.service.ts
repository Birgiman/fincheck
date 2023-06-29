import { Injectable } from '@nestjs/common';
// import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';
import { ValidadeCategoryOwnershipService } from './validate-category-ownership.service';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoriesRepo: CategoriesRepository,
    private readonly validadeCategoryOwnershipService: ValidadeCategoryOwnershipService,
  ) {}

  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }

  findAllByUserId(userId: string) {
    return this.categoriesRepo.findMany({
      where: { userId },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }

  // // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  // //   return `This action updates a #${id} category`;
  // // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
