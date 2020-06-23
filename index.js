const { ApolloServer } = require('apollo-server');
const {typeDefs} = require('./typeDefs');
const {resolvers} = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`listening at ${url}`);
});

