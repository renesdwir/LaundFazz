import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://32fc-158-140-175-209.ngrok.io",
  cache: new InMemoryCache(),
});

export default client;
