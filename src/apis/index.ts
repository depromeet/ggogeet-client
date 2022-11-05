import { Axios } from "@/src/utils/axios";
import type { Response, ApiStructure } from "@/src/utils/axios";

interface UserInfomation {
  name: string;
  phoneNumber: string;
}

export class User extends Axios implements ApiStructure {
  constructor() {
    super();
  }

  /**
   * 유저 정보를 가져옵니다
   * @methods GET
   * @path /users
   */
  async get(userId: string) {
    const { data } = await this.axios.get<Response<UserInfomation>>(`/users`, {
      params: {
        userId: userId,
      },
    });

    return data;
  }

  /**
   * 유저 정보 업데이트 합니다.
   * @methods POST
   * @path /users
   */
  async update(payload: UserInfomation) {
    const { data } = await this.axios.post<Response<UserInfomation>>(
      "/users",
      payload
    );

    return data;
  }
}
