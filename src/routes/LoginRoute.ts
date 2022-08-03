import express from 'express';
import CreateLoginController from '../controllers/login/CreateLoginController';

const router = express.Router();

router.post('/', CreateLoginController);

export default router;