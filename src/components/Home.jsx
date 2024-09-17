import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const messages = ['Welcome to Explore Your Passion at College Clubs', 'Connect, Engage, and Thrive', 'Join us today!'];

    useEffect(() => {
        // Set up interval to switch messages every 3 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <section className={styles.home}>
            <div className={styles.homeContent}>
                <h1 className={styles.announcement}>{messages[currentIndex]}</h1>
                <p className={styles.description}>Step into a world of opportunities with College Clubs! With a wide array of clubs to choose from, you’ll find countless ways to get involved, develop new skills, and meet new friends. Dive into our community and start making the most of your college experience today!</p>
                <div className={styles.btnContainer}>
                    {/* <a href="#get-started" className={`${styles.btn} ${styles.primaryBtn}`}>Get Started</a> */}
                    <a href="#learn-more" className={`${styles.btn} ${styles.secondaryBtn}`}>Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
