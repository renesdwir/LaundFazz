import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://75fb-158-140-175-209.ngrok.io",
  cache: new InMemoryCache(),
});

export default client;
