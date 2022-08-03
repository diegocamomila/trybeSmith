import { IOrderList } from '../../interfaces/order.interface';
import connection from '../connection';

// fonte https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
// fonte https://stackoverflow.com/questions/62942597/using-json-arrayagg-in-a-sub-select-with-order-by-gives-error
// fonte https://universodosdados.com/tag/json_arrayagg/
export default async (): Promise<IOrderList[]> => {
  const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
  FROM Trybesmith.Orders o
  INNER JOIN Trybesmith.Products p
  ON o.id = p.orderId
  GROUP BY o.id
  ORDER BY o.userId;`;

  const [result] = await connection.execute(query);
  // console.log(result);
  return result as IOrderList[];
};