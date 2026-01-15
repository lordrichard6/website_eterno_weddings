import styles from './Features.module.css';

export default function Features() {
    const features = [
        {
            title: "Full-Service Planning",
            desc: "From initial concept to venue selection and vendor management, we handle every logistical detail with precision and grace.",
            icon: "✨"
        },
        {
            title: "Bespoke Design",
            desc: "We curate a cohesive visual narrative, selecting palettes, textures, and florals that reflect your unique love story.",
            icon: "🎨"
        },
        {
            title: "Destination Management",
            desc: "Specializing in Zurich and the Swiss Alps, we manage logistics for international guests to ensure a seamless experience.",
            icon: "🏔️"
        }
    ];

    return (
        <section id="approach" className={`section ${styles.features}`}>
            <div className="container">
                <div className={styles.intro}>
                    <div className={styles.divider}></div>
                    <h2 className={styles.title}>The Art of Celebration</h2>
                    <p>We believe that true luxury lies in the details. Our approach is personal, transparent, and dedicated to perfection.</p>
                </div>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <div key={i} className={styles.card}>
                            <span className={styles.icon}>{f.icon}</span>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
