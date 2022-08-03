import express from 'express';
import ProductRoute from './routes/ProductRoute';
import UserRoute from './routes/UserRoute';
import OrderRoute from './routes/OrderRoute';
import LoginRoute from './routes/LoginRoute';

const app = express();

app.use(express.json());
app.use('/products', ProductRoute);
app.use('/users', UserRoute);
app.use('/orders', OrderRoute);
app.use('/login', LoginRoute);

export default app;
