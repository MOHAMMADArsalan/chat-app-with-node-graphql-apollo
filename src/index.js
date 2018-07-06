import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import typeDefs from './schema/schema';
import resolvers from './schema/resolvers';
import './config/dbConnection';
import middlewares from './config/middlerware';

const app = express();
middlewares(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    console.log(req);
    return { user: req.user };
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  /* eslint-disable no-console */
  console.log('Apollo Server is running on ', server.graphqlPath);
});
