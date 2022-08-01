import express from 'express';
import CreateProductController from '../controllers/product/CreateProductController';
import AllProductController from '../controllers/product/AllProductController';
// import validateProduct from '../middlewares/validateProduct';

const router = express.Router();

router.post('/', CreateProductController);
router.get('/', AllProductController);

export default router;