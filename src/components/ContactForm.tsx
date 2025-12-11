'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Calendar } from 'lucide-react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        priority_topic: 'All'
    })
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        const formattedDate = startDate && endDate
            ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : startDate
                ? startDate.toLocaleDateString()
                : ''

        const submissionData = {
            ...formData,
            arrival_date: formattedDate
        }

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData)
            })

            if (!res.ok) throw new Error('Failed to submit')

            setStatus('success')
            setFormData({ name: '', email: '', whatsapp: '', priority_topic: 'All' })
            setDateRange([null, null])
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
                        <label htmlFor="arrival_date">When are you in Lima? <span className={styles.optional}>(Optional)</span></label>
                        <div className={styles.dateWrapper}>
                            <Calendar className={styles.calendarIcon} size={20} />
                            <DatePicker
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                isClearable={true}
                                placeholderText="Select dates (e.g., Dec 10 - Dec 20)"
                                className={styles.dateInput}
                            />
                        </div>
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
                        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Thanks for reaching out! We\'ll contact you soon via Email or WhatsApp.' : 'Send My Details'}
                    </button>

                    {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
                </form>
            </div>
        </section>
    )
}
