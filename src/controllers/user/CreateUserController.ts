import { Request, Response } from 'express';
import { IUser } from '../../interfaces/user.interface';
import CreateUserService from '../../services/user/CreateUserService';

export default async (req: Request, res: Response) => {
  const { classe, level, username, password }: IUser = req.body;
  const token = await CreateUserService({ classe, level, username, password });

  res.status(201).json({ token });
};