import styles from './About.module.css'

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    {/* Placeholder for Edgar's photo */}
                    <div className={styles.placeholderPhoto}>👨‍⚕️</div>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Meet Your Instructor</h2>
                    <h3 className={styles.subheading}>Hi!</h3>
                    <p className={styles.text}>
                        I'm a <strong>medical doctor</strong> based in Lima with a passion for teaching.
                        I speak fluent English and understand exactly what travelers need to know to feel safe and confident in Peru.
                    </p>
                    <ul className={styles.list}>
                        <li>✅ Medical Background (Trust & Safety)</li>
                        <li>✅ Fluent in English & Spanish</li>
                        <li>✅ Specialized in "Survival" Contexts</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
