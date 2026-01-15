import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    Eterno
                </div>

                <ul className={styles.links}>
                    <li><Link href="#approach">Our Approach</Link></li>
                    <li><Link href="#portfolio">Portfolio</Link></li>
                    <li><Link href="#planner">The Planner</Link></li>
                </ul>

                <Link href="#contact" className={styles.cta}>
                    Book Consultation
                </Link>
            </div>
        </nav>
    );
}
