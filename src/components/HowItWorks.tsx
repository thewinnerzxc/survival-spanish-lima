import styles from './HowItWorks.module.css'

export default function HowItWorks() {
    const steps = [
        { num: "01", title: "Fill the Form", text: "Share your details, travel dates, and what you want to focus on." },
        { num: "02", title: "Get Connected", text: "I'll contact you via WhatsApp within 24 hours to schedule." },
        { num: "03", title: "Start Learning", text: "Meet online or in-person (Miraflores, San Isidro, Jesus Maria, Lince) and start speaking." }
    ]

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>How It Works</h2>
            <div className={styles.steps}>
                {steps.map((step, i) => (
                    <div key={i} className={styles.step}>
                        <div className={styles.number}>{step.num}</div>
                        <h3 className={styles.title}>{step.title}</h3>
                        <p className={styles.text}>{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
