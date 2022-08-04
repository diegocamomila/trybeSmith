// import { ResultSetHeader } from 'mysql2';
import connection from '../connection';
import IJwt from '../../interfaces/IJwt.interface';

export default async (user: IJwt) => {
  const [result] = await connection.execute(
    'SELECT Users.id, Users.username FROM Trybesmith.Users WHERE username=? AND password=?;',
    [user.username, user.password],
  );

  return result;
};