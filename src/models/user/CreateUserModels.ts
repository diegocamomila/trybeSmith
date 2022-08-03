import { ResultSetHeader } from 'mysql2';
import connection from '../connection';
import { IUser } from '../../interfaces/user.interface';

export default async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (classe, level, username, password)
  VALUES (?, ?, ?, ?);`;
  const [result] = await connection
    .execute<ResultSetHeader>(query, [classe, level, username, password]);
  const newUser = { id: result.insertId, username, classe, level, password };
  console.log(newUser);
  return newUser;
};