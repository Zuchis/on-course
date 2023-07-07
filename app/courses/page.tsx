import Link from 'next/link';

import { Test } from '@core-ui/Test';

import styles from './page.module.css';

const CoursesPage = () => {
    return (
        <main className={styles.main}>
            <Link style={{ marginRight: '10rem' }} href="/">
                Home
            </Link>
        </main>
    );
};

export default CoursesPage;
