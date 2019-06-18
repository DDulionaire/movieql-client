import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://graphmovie-o48hizn9n.now.sh/"
});

export default client;