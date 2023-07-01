import { Client, cacheExchange, fetchExchange } from 'urql';

import { getGraphqlHost } from './get-gql-host';

export const createUrqlClient = () => {
    const client = new Client({
        url: getGraphqlHost(),
        exchanges: [cacheExchange, fetchExchange],
    });

    return client;
};
