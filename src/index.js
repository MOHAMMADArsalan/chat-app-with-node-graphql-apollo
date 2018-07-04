import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './schema/schema';
import resolvers from "./schema/resolvers";

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  /* eslint-disable no-console */
  console.log('Apollo Server is running on ', server.graphqlPath);
});
