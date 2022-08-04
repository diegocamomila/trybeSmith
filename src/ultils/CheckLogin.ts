import jwt from 'jsonwebtoken';
import { throwError } from '../middlewares/errorHandler';

const SECRET = process.env.JWT_SECRET || 'joinha';

export default (token: string) => {
  try {
    const load = jwt.verify(token, SECRET);
    const user = load;
    return user;
  } catch (err) {
    throwError('Unauthorized', 'Invalid token');
  }
};