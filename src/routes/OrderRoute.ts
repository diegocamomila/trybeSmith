import express from 'express';
import AllOrderController from '../controllers/order/AllOrderController';

const router = express.Router();

router.get('/', AllOrderController);

export default router;