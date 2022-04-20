import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://breezy-pug-25.loca.lt",
  cache: new InMemoryCache(),
});

export default client;
