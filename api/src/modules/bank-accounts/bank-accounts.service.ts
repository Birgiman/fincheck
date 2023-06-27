import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';

@Injectable()
export class BankAccountsService {
  constructor(private readonly bankAccountsRepo: BankAccountsRepository) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { color, initialBalance, name, type } = createBankAccountDto;

    return this.bankAccountsRepo.create({
      data: {
        userId,
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  findAll() {
    return `This action returns all banckAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} banckAccount`;
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a #${id} banckAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} banckAccount`;
  }
}
