import styles from './VideoSection.module.css'

export default function VideoSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Video gallery</h2>
                <div className={styles.videoGrid}>
                    <div className={styles.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/UxE3n6beo0k?si=AQGoKQXjqr9XXTEy"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={styles.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/JlWjyYY1CVI?si=zUknDacBFMqH92Nl"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
