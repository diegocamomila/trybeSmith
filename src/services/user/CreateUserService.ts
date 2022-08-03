import { IUser } from '../../interfaces/user.interface';
import CreateUserModel from '../../models/user/CreateUserModels';
import NewToken from '../../ultils/JwtGenerate';

export default async ({ username, classe, level, password }: IUser) => {
  const newUser = await CreateUserModel({ username, classe, level, password });
  // console.log(newUser);
  const result = { id: newUser.id, username: newUser.username, password: newUser.password };
  const token = NewToken(result);

  return token;
};