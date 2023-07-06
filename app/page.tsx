import Link from 'next/link';

import styles from './page.module.css';

const Home = () => {
    return (
        <main className={styles.main}>
            <Link href="/privacy_policy">Privacy policy</Link>
        </main>
    );
};

export default Home;
