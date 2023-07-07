import getConfig from 'next/config';

import { isDev } from '../utils';

const { serverRuntimeConfig } = getConfig() || {};

export const getGraphqlHost = (): string => {
    if (isDev()) {
        return process.env.GRAPHQL_ENDPOINT || '/graphql';
    }

    console.log(serverRuntimeConfig);

    return serverRuntimeConfig?.GRAPHQL_ENDPOINT || '/graphql';
};
