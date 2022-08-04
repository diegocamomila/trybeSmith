import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

export const errorHandler: 
ErrorRequestHandler = async (err, _req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'BadRequest':
      res.status(400).json({ message });
      break;
    case 'Unprocessable':
      res.status(422).json({ message });
      break;
    case 'Unauthorized':
      res.status(401).json({ message });
      break;
    default:
      res.status(500).json({ message });
  }
  next();
};

export const throwError = (name: string, message: string): void => {
  const e = new Error('Expired or invalid token');
  e.name = name;
  e.message = message;
  throw e;
};

export default {
  errorHandler,
  throwError,
};