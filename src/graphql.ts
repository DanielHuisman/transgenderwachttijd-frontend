import {ApolloClient, InMemoryCache} from '@apollo/client';

import {config} from './config';

export const client = new ApolloClient({
    uri: config.api.url,
    cache: new InMemoryCache()
});
