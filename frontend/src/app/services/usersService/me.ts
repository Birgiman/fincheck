import { UserEntity } from '../../entities/User';
import { httpClient } from '../httpClient';

type MeResponse = UserEntity;

export async function me() {
  const { data } = await httpClient.get<MeResponse>('/users/me')

  return data;
}
