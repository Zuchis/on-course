import Image from 'next/image';

import { Test } from '@core-ui/Test';

import styles from './page.module.css';

const Home = () => {
    return (
        <main className={styles.main}>
            <Test />
        </main>
    );
};

export default Home;
