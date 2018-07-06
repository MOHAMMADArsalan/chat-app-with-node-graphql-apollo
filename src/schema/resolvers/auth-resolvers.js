import { User } from '../../models/index';
import { requireAuth } from '../../services/auth';

export default {
  signup: async (_, {
    firstName, lastName, username, email, password,
  }) => {
    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    try {
      await user.save();
      return {
        token: user.createToken(),
      };
    } catch (e) {
      return {
        token: null,
        error: e,
      };
    }
  },
  login: async (_, { email, password }) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not exist!');
      }

      if (!user.authenticateUser(password)) {
        throw new Error('Password doesnot match!');
      }
      return {
        token: user.createToken(),
      };
    } catch (error) {
      throw error;
    }
  },
  me: async (_, args, { user }) => {
    try {
      const me = await requireAuth(user);
      return me;
    } catch (error) {
      throw error;
    }
  },
};
