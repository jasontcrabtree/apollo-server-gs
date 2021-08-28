/* Resolves define the technique for fetching the types defined in the Schema. */
const books = require('./data')

// This resolver retrieves books from the "books" array
const resolvers = {
    Query: {
        books: () => books,
    }
}

module.exports = resolvers;