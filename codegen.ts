import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    // @ts-ignore
    inputValueDeprecation: true,
    overwrite: true,
    debug: true,
    verbose: true,
    schema: 'http://localhost:5000/graphql',
    emitLegacyCommonJSImports: false,
    ignoreNoDocuments: true,
    documents: ['packages/**/*.graphql', 'components/**/*.graphql', 'app/**/*.graphql'],
    generates: {
        'packages/graphql-types/codegen/graphql.ts': {
            plugins: [
                {
                    add: {
                        content: '/* eslint-disable */',
                    },
                },
                'typescript',
                'typescript-operations',
            ],
            config: {
                namingConvention: {
                    enumValues: 'change-case-all#upperCase',
                },
                skipTypename: true,
                includeDirectives: true,
            },
        },
        './schema.graphql': {
            plugins: ['schema-ast'],
        },
    },
    hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
