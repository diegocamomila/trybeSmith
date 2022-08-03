import express from 'express';
import CreateUserController from '../controllers/user/CreateUserController';

const router = express.Router();

router.get('/', CreateUserController);

export default router;