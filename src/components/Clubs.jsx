import React, { useState } from 'react';
import styles from './Clubs.module.css'; // Importing the CSS module

const clubsData = [
    // Technology Clubs
    { name: 'AI Innovators Club', category: 'Technology', description: 'Explore and innovate in artificial intelligence.' },
    { name: 'Web Dev Wizards', category: 'Technology', description: 'Master web development with hands-on projects.' },

    // Sports Clubs
    { name: 'Elite Soccer Squad', category: 'Sports', description: 'Join the top team and enhance your soccer skills.' },
    { name: 'Adventure Racing Club', category: 'Sports', description: 'Participate in thrilling adventure races and challenges.' },

    // Art Clubs
    { name: 'Modern Art Collective', category: 'Art', description: 'Dive into contemporary art with fellow enthusiasts.' },
    { name: 'Classic Art Appreciation Society', category: 'Art', description: 'Celebrate and study classic works of art.' }
];

const Clubs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedClub, setSelectedClub] = useState(null);

    const filteredClubs = selectedCategory === 'All'
        ? clubsData
        : clubsData.filter(club => club.category === selectedCategory);

    return (
        <section id="clubs" className={styles.clubsSection}>
            <h2 className={styles.clubsHeading}>Our Clubs</h2>
            <div className={styles.clubFilters}>
                <button 
                    className={`${styles.filterButton} ${selectedCategory === 'All' ? styles.active : ''}`} 
                    onClick={() => setSelectedCategory('All')}
                >
                    All
                </button>
                <button 
                    className={`${styles.filterButton} ${selectedCategory === 'Technology' ? styles.active : ''}`} 
                    onClick={() => setSelectedCategory('Technology')}
                >
                    Technology
                </button>
                <button 
                    className={`${styles.filterButton} ${selectedCategory === 'Sports' ? styles.active : ''}`} 
                    onClick={() => setSelectedCategory('Sports')}
                >
                    Sports
                </button>
                <button 
                    className={`${styles.filterButton} ${selectedCategory === 'Art' ? styles.active : ''}`} 
                    onClick={() => setSelectedCategory('Art')}
                >
                    Art
                </button>
            </div>
            <div className={styles.clubsContainer}>
                {filteredClubs.map((club, index) => (
                    <div key={index} className={styles.club} onClick={() => setSelectedClub(club)}>
                        <h3 className={styles.clubName}>{club.name}</h3>
                        <p className={styles.clubDescription}>{club.description}</p>
                    </div>
                ))}
            </div>

            {selectedClub && (
                <div className={styles.modal} onClick={() => setSelectedClub(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <h3 className={styles.modalTitle}>{selectedClub.name}</h3>
                        <p className={styles.modalDescription}>{selectedClub.description}</p>
                        <button className={styles.modalClose} onClick={() => setSelectedClub(null)}>Join</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Clubs;
