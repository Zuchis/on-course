import Link from 'next/link';

import { Test } from '@core-ui/Test';

import styles from './page.module.css';

const Home = () => {
    return (
        <main className={styles.main}>
            <Link style={{ marginRight: '10rem' }} href="/privacy_policy">
                Privacy policy
            </Link>
            <Test />
        </main>
    );
};

export default Home;
