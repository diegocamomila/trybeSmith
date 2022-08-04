import joi from 'joi';
import LoginModel from '../../models/login/LoginModel';
import CheckLogin from '../../ultils/JwtGenerate';
import { throwError } from '../../middlewares/errorHandler';
import IJwt from '../../interfaces/IJwt.interface';

const userSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

export default async (user: IJwt) => {
  const { error } = userSchema.validate(user);

  if (error) {
    throwError('BadRequest', error.message);
  }

  const userExist = await LoginModel(user);
  if (!userExist) {
    throwError('Unauthorized', 'Username or password invalid');
  }
  const result = (user);
  const token = CheckLogin(result);
  return token;
};
