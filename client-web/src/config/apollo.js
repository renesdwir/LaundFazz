import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://fuzzy-baboon-81.loca.lt",
  cache: new InMemoryCache(),
});

export default client;
