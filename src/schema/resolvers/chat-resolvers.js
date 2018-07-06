import { requireAuth } from '../../services/auth';
import { Friend } from '../../models';

export default {
  createChat: async (_, { currentUserId, otherUserId }, { user }) => {
    try {
      await requireAuth(user);
      const friend = await Friend.findOne({ friend: otherUserId });
      if (!friend) {
        const chat = new Friend({ userId: currentUserId, friend: otherUserId });
        await chat.save();
        return { message: 'Friend Created successfully' };
      }
      return { message: 'Already have friend' };
    } catch (error) {
      throw error;
    }
  },
  getFriends: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const friend = await Friend.find({ userId: _id }).populate(
        'friend',
        'username firstName lastName email _id',
      );
      return friend;
    } catch (error) {
      throw error;
    }
  },
};
