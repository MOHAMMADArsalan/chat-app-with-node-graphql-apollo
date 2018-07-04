import books from '../../mock/books.json';
import AuthResolvers from './auth-resolvers';


export default {
  Query: {
    books: () => books,
  },
  Mutation: {
    signup: AuthResolvers.signup,
  },
};
