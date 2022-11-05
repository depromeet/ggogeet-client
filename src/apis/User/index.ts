import { GET } from '@/src/constants/api';
import { requester } from '@/src/apis/requester';
import { UserInfoRes } from './types';

export const getUserInfo = async () => {
  const { data } = await requester<UserInfoRes>({
    method: GET,
    url: '/apis/user',
  });

  return data;
};
