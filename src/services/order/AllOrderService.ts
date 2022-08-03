import AllOrderModel from '../../models/order/AllOrderModel';

export default async () => {
  const allProduct = await AllOrderModel();
  // console.log(allProduct);
  return { status: 200, allProduct };
};
