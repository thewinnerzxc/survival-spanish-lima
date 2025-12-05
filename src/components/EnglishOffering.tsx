import styles from './EnglishOffering.module.css'

export default function EnglishOffering() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Also offering: English Classes</h2>
                    <p className={styles.text}>
                        Are you a local student or professional looking to improve your English?
                        I use the same practical, conversation-focused methodology to help you master English.
                    </p>
                    <ul className={styles.list}>
                        <li>✅ Online or In-person</li>
                        <li>✅ Locations: Miraflores, San Isidro, Jesus Maria, Lince</li>
                        <li>✅ Cafés, Coworking spaces, etc.</li>
                    </ul>
                    <a href="#contact" className={styles.button}>Inquire About English</a>
                </div>
            </div>
        </section>
    )
}
