import User from './User';

type UserResponse = {
  results: User[]
}

async function getUser(id?: string | number): Promise<User> {
  const resp: Response = await fetch('https://randomuser.me/api/?nat=au,ca,gb,ie,nz,us');
  const data: UserResponse = await resp.json();
  return data.results[0];
}

export default getUser;
