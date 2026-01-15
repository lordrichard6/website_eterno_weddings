import Image from 'next/image';
import styles from './Gallery.module.css';

export default function Gallery() {
    return (
        <section id="portfolio" className={`section ${styles.gallery}`}>
            <div className="container">
                <div className={styles.intro}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Curated Details</h2>
                    <p>A glimpse into the aesthetics we craft for our clients.</p>
                </div>

                <div className={styles.layout}>
                    {/* Item 1: Decor Details */}
                    <div className={styles.showcase}>
                        <div className={styles.imageBox}>
                            <Image
                                src="/gallery.png"
                                alt="Wedding Decor Details - Bouquet, Champagne, Invitation, Ring"
                                fill
                            />
                        </div>
                        <div className={styles.textBox}>
                            <span className={styles.tag}>Styling & Decor</span>
                            <h3 className={styles.showcaseTitle}>Cohesive Visual Storytelling</h3>
                            <p style={{ marginBottom: '1.5rem', color: '#666' }}>
                                We weave your color palette—like this soft blend of periwinkle, lavender, and rose—through every element.
                                From the calligraphy on your invitations to the floral installation at your reception.
                            </p>
                        </div>
                    </div>

                    {/* Item 2: The Planner (Using alternating layout) */}
                    <div className={`${styles.showcase} ${styles.showcaseReverse}`}>
                        <div className={styles.imageBox}>
                            <Image
                                src="/planner.png"
                                alt="Luxury Wedding Planner Portrait"
                                fill
                            />
                        </div>
                        <div id="planner" className={styles.textBox}>
                            <span className={styles.tag}>The Experience</span>
                            <h3 className={styles.showcaseTitle}>Guided by Expertise</h3>
                            <p style={{ marginBottom: '1.5rem', color: '#666' }}>
                                "My mission is to create a sanctuary of calm for my couples, allowing them to be fully present in their joy whilst I execute the impossible behind the scenes."
                            </p>
                            <p><strong>— Elena, Founder & Lead Planner</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
