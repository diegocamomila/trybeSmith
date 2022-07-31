import { ICreateProduct } from '../interfaces/product.interface';
import CreateProductModel from '../models/CreateProductModel';

export default async ({ name, amount }:ICreateProduct) => {
  const newProduct = await CreateProductModel({ name, amount });
  // console.log(newProduct);

  return { status: 201, newProduct };
};