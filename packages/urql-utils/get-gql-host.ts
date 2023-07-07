import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig() || {};

export const getGraphqlHost = (): string => {
    return process.env.GRAPHQL_ENDPOINT || '/graphql';
};
