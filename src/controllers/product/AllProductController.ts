import { Request, Response } from 'express';
import AllProductService from '../../services/product/AllProductService';

export default async (_req: Request, res: Response) => {
  try {
    const { status, allProduct } = await AllProductService();
    // console.log(allProduct);
    return res.status(status).json(allProduct);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};