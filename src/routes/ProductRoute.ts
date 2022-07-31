import express from 'express';
import CreateProductController from '../controllers/CreateProductController';
// import validateProduct from '../middlewares/validateProduct';

const router = express.Router();

router.post('/', CreateProductController);

export default router;