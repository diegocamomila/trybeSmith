import { ResultSetHeader } from 'mysql2';
import { ICreateProduct } from '../interfaces/product.interface';
import connection from './connection';

export default async (product: ICreateProduct): Promise<ICreateProduct> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const newProduct = { id: result.insertId, name, amount };
  // console.log(newProduct);
  return newProduct;
};