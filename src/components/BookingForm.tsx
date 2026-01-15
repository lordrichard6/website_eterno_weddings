import styles from './BookingForm.module.css';

export default function BookingForm() {
    return (
        <section id="contact" className={`section ${styles.section}`}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Begin Your Journey</h2>
                    <p>We take on a limited number of weddings each year to ensure exceptional focus. Please inquire for 2026/2027 availability.</p>
                </div>

                <form className={styles.form}>
                    <div className={styles.group}>
                        <label className={styles.label}>Name</label>
                        <input type="text" className={styles.input} placeholder="Your Name" />
                    </div>
                    <div className={styles.group}>
                        <label className={styles.label}>Email</label>
                        <input type="email" className={styles.input} placeholder="john@example.com" />
                    </div>
                    <div className={styles.group}>
                        <label className={styles.label}>Wedding Date</label>
                        <input type="date" className={styles.input} />
                    </div>
                    <div className={styles.group}>
                        <label className={styles.label}>Vision or Venue Preference</label>
                        <textarea className={styles.textarea} placeholder="Tell us about your dream wedding..."></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Request Consultation
                    </button>
                </form>
            </div>
        </section>
    );
}
