import express from 'express';
import CreateProductController from '../controllers/CreateProductController';
import AllProductController from '../controllers/AllProductController';
// import validateProduct from '../middlewares/validateProduct';

const router = express.Router();

router.post('/', CreateProductController);
router.get('/', AllProductController);

export default router;