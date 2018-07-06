import AuthResolvers from './auth-resolvers';
import ChatResolvers from './chat-resolvers';
import LocationResolvers from './location-resolvers';

export default {
  Mutation: {
    signup: AuthResolvers.signup,
    login: AuthResolvers.login,
    createChat: ChatResolvers.createChat,
    shareLocation: LocationResolvers.shareLocation,
  },
  Query: {
    me: AuthResolvers.me,
    friends: ChatResolvers.getFriends,
    // findNearBy: LocationResolvers.findNearBy,
  },
};
