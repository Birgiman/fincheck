import { TransactionsEntity } from '../../entities/Transactions';
import { httpClient } from '../httpClient';

type TransactionsResponse = Array<TransactionsEntity>

export type TransactionsFilters = {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: TransactionsEntity['type'];
}

export async function getAll(filters: TransactionsFilters) {
  const { data } = await httpClient.get<TransactionsResponse>('/transactions', {
    params: filters
  })

  return data;
}
