import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://yellow-horse-59.loca.lt/",
  cache: new InMemoryCache(),
});

export default client;
