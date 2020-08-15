import { userType } from '../../store/User';

function newUser(
  parent,
  args,
  { user }: { user: { uuidPack: any; users: userType[] } }
) {
  user.uuidPack();
  const { users } = user;
  console.log('uuidPack()', user.uuidPack());

  const newUserL: userType = {
    id: users[users.length - 1].id + 1,
    userToken: user.uuidPack(),
  };

  user.users.push(newUserL);

  return newUserL;
}

export default newUser;
