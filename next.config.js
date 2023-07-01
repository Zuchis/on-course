/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    },
    serverRuntimeConfig: {
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(graphql|gql)/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        });

        return config;
    },
};

module.exports = nextConfig;
