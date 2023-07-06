'use client';

import React, { FC } from 'react';
import { useQuery } from 'urql';

import { GetUsersQuery, GetUsersQueryVariables } from '@packages/graphql-types';
import { getUsersQuery } from '@packages/queries';

export const Test: FC = () => {
    const [result] = useQuery<GetUsersQuery, GetUsersQueryVariables>({
        query: getUsersQuery,
    });

    const { data, fetching, error } = result;

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    if (data?.users) {
        console.log(data.users);
    }

    return (
        <>
            <span>test users query</span>
        </>
    );
};
