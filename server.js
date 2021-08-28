// @ts-check

const { ApolloServer, gql } = require('apollo-server');
// import typeDefs from './schema';
const schema = require('./schema')
// import resolvers from './resolvers';
const resolvers = require('./resolvers')

// The ApolloServer constructor requires two params; schema definition and resolvers

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
});

// The `listen` method launches a web server
server.listen().then(({ url }) => {
  console.log(`🎬 Server started at ${url}`);
});
