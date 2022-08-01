import jwt from 'jsonwebtoken';
import IJwt from '../interfaces/IJwt.interface';

const SECRET = process.env.JWT_SECRET || 'joinha';

export default (user: IJwt) => {
  const newToken = jwt.sign({ data: user }, SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return newToken;
};
