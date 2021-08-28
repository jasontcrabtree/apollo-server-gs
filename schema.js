// @ts-check

const { ApolloServer, gql } = require('apollo-server');

/*
SCHEMA:
Collection of type definitions (aka typeDefs) that define the *required* shape of graphql queries executed against your data
*/
const typeDefs = gql`
  # Comments in GraphQL Start with #

  # "Book" Type defines the querable fields for books in our data store
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special (a specific method?), it lists the queries the client can execute alongside return types for each query.
  # In this example, the books query will return an array of zero or more Books, as we defined above
  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;
