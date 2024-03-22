import express from express;
import { ApolloServer } from "@apollo/server";
import cors from cors;

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers


})

server.applyMiddleware({ app });

export default app;
