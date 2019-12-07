import User from '../api/User';
import getUser from '../api/users';

export class UserStore {
  getUser: (id?: string | number) => Promise<User>;

  constructor(user: (id?: string | number) => Promise<User>) {
    this.getUser = user;
  }
}

const store = new UserStore(getUser);

export default store;
