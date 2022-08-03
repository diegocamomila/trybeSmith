import { Request, Response } from 'express';
import AllOrderService from '../../services/order/AllOrderService';

export default async (_req: Request, res: Response) => {
  try {
    const { status, allProduct } = await AllOrderService();
    console.log(allProduct);
    return res.status(status).json(allProduct);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};