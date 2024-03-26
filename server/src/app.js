import express from 'express';
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';

import {mergeTypeDef} from "./typeDefs/index.typeDef.js"
import {mergeResolver} from "./resolvers/index.resolver.js"

const app = express();

const server = new ApolloServer({
    typeDefs:mergeTypeDef,
    resolvers:mergeResolver
});

await server.start();

app.use('/graphql',expressMiddleware(server))



export default app;