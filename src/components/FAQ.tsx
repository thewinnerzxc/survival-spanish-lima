import styles from './FAQ.module.css'

export default function FAQ() {
    const faqs = [
        { q: "Where are the classes held?", a: "Classes can be online (Zoom/Google Meet) or in-person in safe, public locations in Miraflores, San Isidro, Jesus Maria, and Lince (cafés, coworking spaces)." },
        { q: "Do you speak English fluently?", a: "Yes! I am fluent in English and have experience working with international tourists." },
        { q: "Is this for complete beginners?", a: "Absolutely. The 'Survival' method is designed exactly for people with zero prior knowledge." },
        { q: "How much does it cost?", a: "I offer competitive rates for 1:1 coaching. Fill out the form, and I'll send you the current packages via WhatsApp." }
    ]

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.list}>
                {faqs.map((item, i) => (
                    <div key={i} className={styles.item}>
                        <h3 className={styles.question}>{item.q}</h3>
                        <p className={styles.answer}>{item.a}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
