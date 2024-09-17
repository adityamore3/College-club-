import React, { useState } from 'react';
import styles from './Events.module.css'; // Import the CSS module

const Events = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        { name: 'Tech Workshop', date: '2024-09-04', description: 'Learn about the latest technologies.', className: 'e1' },
        { name: 'Sports Meet', date: '2024-09-07', description: 'Participate in our annual sports meet.', className: 'e2' },
        { name: 'Art Exhibition', date: '2024-12-20', description: 'Join us for an art exhibition.', className: 'e3' },
    ];

    const toggleForm = (event) => {
        setSelectedEvent(event);
        setIsFormVisible(!isFormVisible);
    };

    const getCountdown = (eventDate) => {
        const eventTime = new Date(eventDate).getTime();
        const currentTime = new Date().getTime();
        const difference = eventTime - currentTime;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (days > 7) {
            return 'Coming soon';
        } else if (days > 2 && days <= 7) {
            return `Happening this week (${days} days left)`;
        } else if (days > 0 && days <= 2) {
            return `Happening in a few days (${days} day${days === 1 ? '' : 's'} left)`;
        } else if (days === 0 && hours > 0) {
            return 'Happening today';
        } else {
            return 'Event ongoing';
        }
    };

    return (
        <section id="events" className={styles.eventsSection}>
            <h2 className={styles.heading}>Upcoming Events</h2>
            <div className={styles.eventsList}>
                {events.map((event, index) => (
                    <div key={index} className={`${styles.event} ${styles[event.className]}`} onClick={() => toggleForm(event)}>
                        <div className={styles.eventImage}></div>
                        <div className={styles.eventDetails}>
                            <h3 className={styles.eventName}>{event.name}</h3>
                            <p className={styles.eventDescription}>{event.description}</p>
                            <p className={styles.eventCountdown}>{getCountdown(event.date)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {isFormVisible && (
                <div className={styles.modal} onClick={() => setIsFormVisible(false)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <h3 className={styles.modalTitle}>Register for {selectedEvent.name}</h3>
                        <form className={styles.registrationForm}>
                            <label className={styles.label}>Name:</label>
                            <input type="text" className={styles.input} required />
                            <label className={styles.label}>Email:</label>
                            <input type="email" className={styles.input} required />
                            <button type="submit" className={styles.submitButton}>Register</button>
                        </form>
                        <button className={styles.closeButton} onClick={() => setIsFormVisible(false)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Events;
