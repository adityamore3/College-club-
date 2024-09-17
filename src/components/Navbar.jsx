import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>College Club</div>
            <div className={styles.navLinksContainer}>
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <li><a href="#Home" className={styles.navItem}>Home</a></li>
                    <li><a href="#acout" className={styles.navItem}>About</a></li>
                    <li><a href="#clubs" className={styles.navItem}>Clubs</a></li>
                    <li><a href="#events" className={styles.navItem}>Events</a></li>
                    <li><a href="#contact" className={styles.navItem}>Contact Us</a></li>
                </ul>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                <ul>
                    <li><a href="#home" className={styles.navItem}>Home</a></li>
                    <li><a href="#about" className={styles.navItem}>About Us</a></li>
                    <li><a href="#clubs" className={styles.navItem}>Clubs</a></li>
                    <li><a href="#events" className={styles.navItem}>Events</a></li>
                    <li><a href="#contact" className={styles.navItem}>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
