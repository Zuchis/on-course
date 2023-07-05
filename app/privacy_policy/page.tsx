import Link from 'next/link';
import React from 'react';

import styles from './page.module.css';

const PrivacyPolicy = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Privacy Policy meu truta</h1>
            <Link href="/">Home</Link>
        </main>
    );
};

export default PrivacyPolicy;
