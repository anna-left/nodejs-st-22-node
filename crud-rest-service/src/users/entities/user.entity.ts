interface IUserData {
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

interface IUser extends IUserData {
  id: string;
}

export { IUserData, IUser };
