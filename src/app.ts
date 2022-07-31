import express from 'express';
// import { errorHandler } from './middlewares/errorHandler';
import ProductRoute from './routes/ProductRoute';

const app = express();

app.use(express.json());
app.use('/products', ProductRoute);

// app.use(errorHandler);

export default app;
