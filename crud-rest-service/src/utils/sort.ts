import { User } from 'src/users/entities/user.entity';

function compare(user1: User, user2: User) {
  if (user1.login < user2.login) {
    return -1;
  }
  if (user1.login > user2.login) {
    return 1;
  }
  return 0;
}

export { compare };
