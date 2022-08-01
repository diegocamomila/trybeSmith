import AllProductModel from '../models/AllProductModel';

export default async () => {
  const allProduct = await AllProductModel();
  // console.log(allProduct);

  return { status: 200, allProduct };
};