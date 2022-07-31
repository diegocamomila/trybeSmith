import { Request, Response } from 'express';
import { ICreateProduct } from '../interfaces/product.interface';
import CreateProductServece from '../services/CreateProductService';

export default async (req: Request, res: Response) => {
  const product = req.body as ICreateProduct;
  try {
    const { status, newProduct } = await CreateProductServece(product);
    // console.log(newProduct);
    return res.status(status).json(newProduct);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
};