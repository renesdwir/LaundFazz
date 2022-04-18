import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ancient-bullfrog-11.loca.lt",
  cache: new InMemoryCache(),
});

export default client;
