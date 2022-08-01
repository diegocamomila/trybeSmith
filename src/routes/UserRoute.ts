import express from 'express';
import CreateUserController from '../controllers/CreateUserController';

const router = express.Router();

router.post('/', CreateUserController);

export default router;