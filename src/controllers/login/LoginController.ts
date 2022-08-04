// import { Request, Response } from 'express';
// import { IUser } from '../../interfaces/user.interface';
// import LoginService from '../services/login/login.services';

// export default async (req: Request, res: Response) => {
//   try {
//     const user = req.body as IUser;
//     const token = await LoginService(user);
//     return res.status(200).json({ token });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err });
//   }
// };
