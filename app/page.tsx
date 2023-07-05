import Link from 'next/link';
import { Test } from '@core-ui/Test';

import styles from './page.module.css';

const Home = () => {
    return (
        <main className={styles.main}>
            <Test />
            <i className="fas fa-home"></i>
            <Link href="/privacy_policy">Privacy policy</Link>
        </main>
    );
};

export default Home;
