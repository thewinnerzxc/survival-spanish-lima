import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <h3>Survival Spanish Lima</h3>
                    <p>Learn the Spanish you need to survive and thrive in Peru.</p>
                </div>
                <div className={styles.links}>
                    <a href="#contact">Contact</a>
                    <a href="#features">What You'll Learn</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Survival Spanish Lima. All rights reserved.
            </div>
        </footer>
    )
}
