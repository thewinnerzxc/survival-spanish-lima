'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        arrival_date: '',
        priority_topic: 'All'
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!res.ok) throw new Error('Failed to submit')

            setStatus('success')
            setFormData({ name: '', email: '', whatsapp: '', arrival_date: '', priority_topic: 'All' })
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Start Your Survival Spanish Journey</h2>
                <p className={styles.subheading}>Fill out the form and I'll WhatsApp you to schedule your free intro call.</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.group}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="whatsapp">WhatsApp (with Country Code)</label>
                        <input type="text" id="whatsapp" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} placeholder="+1 555 123 4567" />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="arrival_date">When are you in Lima?</label>
                        <input type="text" id="arrival_date" name="arrival_date" required value={formData.arrival_date} onChange={handleChange} placeholder="e.g., Dec 10 - Dec 20" />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="priority_topic">Priority Topic</label>
                        <select id="priority_topic" name="priority_topic" value={formData.priority_topic} onChange={handleChange}>
                            <option value="All">All Basics</option>
                            <option value="Taxi">Taxi & Transport</option>
                            <option value="Food">Food & Dining</option>
                            <option value="Emergency">Emergencies</option>
                        </select>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={status === 'loading' || status === 'success'}>
                        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent! Check your WhatsApp' : 'Send My Details'}
                    </button>

                    {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
                </form>
            </div>
        </section>
    )
}
