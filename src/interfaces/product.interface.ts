export interface ICreateProduct {
  id?:number;
  name: string;
  amount: string;
  orderId?: number | null
}
