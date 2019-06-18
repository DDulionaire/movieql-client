import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://graphmovie-cfrkkn0r5.now.sh/"
  //uri: "https://graphmovie-a8938hdz9.now.sh/"
});

export default client;