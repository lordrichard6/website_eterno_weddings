import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/hero.png"
                alt="Luxury Wedding in Zurich overlooking the lake"
                fill
                className={styles.bgImage}
                priority
            />
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <span className={styles.subheadline}>Unforgettable Moments in Switzerland</span>
                <h1 className={styles.headline}>
                    Exquisite Weddings in the <br /> <em>Heart of Zurich</em>
                </h1>
                <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: '#666' }}>
                    Curating timeless, bespoke celebrations for the modern romantic.
                </p>
                <Link href="#contact" className="btn btn-primary">
                    Start Your Journey
                </Link>
            </div>
        </section>
    );
}
