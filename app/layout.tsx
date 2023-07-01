import './globals.css';
import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import { UrqlProvider } from '@packages/urql-utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'On Course: the grooviest e-learning platform',
    description: 'e-learning platform with videos, lectures, and material submition',
};

const GlobalProviders: FC<PropsWithChildren> = ({ children }) => {
    return <UrqlProvider>{children}</UrqlProvider>;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <GlobalProviders>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </GlobalProviders>
    );
}
