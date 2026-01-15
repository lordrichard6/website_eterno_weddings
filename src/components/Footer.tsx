import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>Eterno</div>

                <div className={styles.meta}>
                    <span>Zurich, Switzerland</span>
                    <span>hello@eternoweddings.ch</span>
                    <span>+41 44 123 45 67</span>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Eterno Weddings. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
