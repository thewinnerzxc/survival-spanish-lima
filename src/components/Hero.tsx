import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Survival Spanish in Lima</h1>
                <p className={styles.subtitle}>
                    Learn the Spanish you actually need: taxis, restaurants, emergencies, and real life.
                    <br />
                    <span className={styles.highlight}>Taught by a medical doctor & local expert.</span>
                </p>
                <div className={styles.ctaGroup}>
                    <a href="#contact" className={styles.primaryBtn}>Book a Free Intro Call</a>
                    <a href="#features" className={styles.secondaryBtn}>See What You'll Learn</a>
                </div>
            </div>
        </section>
    )
}
