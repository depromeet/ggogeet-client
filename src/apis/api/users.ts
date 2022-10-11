export class Users extends Axios {
  constructor() {
    super();
  }

  async get() {
    const { data } = await this.axios.get(`/list/item`);

    return data;
  }
}

export const users = new Users();
