import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://slimy-snake-81.loca.lt/',
    cache: new InMemoryCache()
});

export default client