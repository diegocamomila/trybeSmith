import { RowDataPacket } from 'mysql2';
import { ICreateProduct } from '../../interfaces/product.interface';
import connection from '../connection';

export default async (): Promise<ICreateProduct[]> => {
  const query = 'SELECT id, name, amount, orderId FROM Trybesmith.Products';
  const [result] = await connection.execute<RowDataPacket[]>(query);
  // console.log(result);
  
  return result as ICreateProduct[];
};