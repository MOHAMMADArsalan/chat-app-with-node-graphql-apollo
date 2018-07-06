import jwt from 'jsonwebtoken';
import { User } from '../models';

export const decodeToken = async (token) => {
  const args = token.split(' ');

  if (args[0] === 'Bearer') {
    return jwt.verify(args[1], process.env.JWT_SECRET_TOKEN);
  }
  throw new Error('token is not valid');
};

export const requireAuth = async (user) => {
  if (!user || !user._id) {
    throw new Error('Unauthorized');
  }
  const me = await User.findById(user._id);

  if (!me) {
    throw new Error('Unauthorized');
  }

  return me;
};
