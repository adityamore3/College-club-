import React from 'react';
import styles from './About.module.css'; // Import the CSS module

const aboutSections = [
    {
        id: 1,
        title: 'Who We Are',
        description: 'We are a group of students dedicated to promoting academic excellence and community engagement.',
        authorName: 'Michael Foster',
        authorRole: 'Co-Founder / CTO',
    },
    {
        id: 2,
        title: 'Our Mission',
        description: 'Our mission is to foster a supportive environment that encourages learning, creativity, and leadership.',
        authorName: 'Jane Doe',
        authorRole: 'President',
    },
    {
        id: 3,
        title: 'Our Team',
        description: 'Meet the passionate individuals who make our club successful.',
        authorName: 'John Smith',
        authorRole: 'Secretary',
    }
];

export default function About() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About Us</h2>
                <p className={styles.sectionSubtitle}>Learn more about our mission and team.</p>
                <div className={styles.cardsContainer}>
                    {aboutSections.map((section) => (
                        <div key={section.id} className={styles.card}>
                            {/* Uncomment and use imageUrl if you want to add images */}
                            {/* <img src={section.imageUrl} alt="" className={styles.cardImage} /> */}
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{section.title}</h3>
                                <p className={styles.cardDescription}>{section.description}</p>
                                <div className={styles.authorInfo}>
                                    <p className={styles.authorName}>{section.authorName}</p>
                                    <p className={styles.authorRole}>{section.authorRole}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
