'use client';

import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'urql';

import { createUrqlClient } from './urql-client';

export const UrqlProvider: FC<PropsWithChildren> = ({ children }) => {
    const client = createUrqlClient();

    return <Provider value={client}>{children}</Provider>;
};
