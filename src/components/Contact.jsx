import React, { useState } from 'react';
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
        if (!formData.message) formErrors.message = 'Message is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Simulate sending email
            alert('Form submitted successfully! We will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setErrors(formErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <h2 className={styles.heading}>Contact Us</h2>
            <div className={styles.contactInfo}>
                <p className={styles.contactItem}><strong>Email:</strong> contact@collegeclub.com</p>
                <p className={styles.contactItem}><strong>Phone:</strong> +1 (414) 857 - 0107</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                    ></textarea>
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
