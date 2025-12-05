import styles from './Features.module.css'

export default function Features() {
    const features = [
        { title: "Taxi & Transportation", icon: "🚕", desc: "Negotiate fares, give directions, and travel safely." },
        { title: "Restaurant & Café", icon: "🍽️", desc: "Order food, ask for the bill, and handle dietary restrictions." },
        { title: "Emergency & Pharmacy", icon: "🏥", desc: "Explain symptoms, buy medicine, and ask for help." },
        { title: "Social & Polite Phrases", icon: "👋", desc: "Greet locals, make friends, and be culturally respectful." }
    ]

    return (
        <section id="features" className={styles.features}>
            <h2 className={styles.heading}>What You'll Learn</h2>
            <div className={styles.grid}>
                {features.map((f, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.icon}>{f.icon}</div>
                        <h3 className={styles.title}>{f.title}</h3>
                        <p className={styles.desc}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
