import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faInfoCircle, faUsers, faTools, faPaintBrush, faHeadset, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.linksContainer}>
                    <div className={styles.box}>
                        <h3>Quick Links</h3>
                        <a href="./components/Home"><FontAwesomeIcon icon={faChevronRight} /> Home</a>
                        <a href="./components/About"><FontAwesomeIcon icon={faChevronRight} /> About Us</a>
                        <a href="./components/Clubs"><FontAwesomeIcon icon={faChevronRight} /> Clubs</a>
                        <a href="./components/Events"><FontAwesomeIcon icon={faChevronRight} /> Events</a>
                    </div>
                    <div className={styles.box}>
                        <h3>Clubs</h3>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> Technology</a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> Sports</a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> Arts</a>
                    </div>
                    <div className={styles.box}>
                        <h3>Contact Us</h3>
                        <a href="#"><FontAwesomeIcon icon={faPhone} /> 91-22-3338 397</a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} /> contact@collegeclub.com</a>
                        <a href="#"><FontAwesomeIcon icon={faHeadset} /> Customer Support</a>
                    </div>
                    <div className={styles.box}>
                        <h3>Events</h3>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> Tech Workshop</a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> Sports Meet</a>
                        <a href="#"><FontAwesomeIcon icon={faChevronRight} /> Art Exhibition</a>
                    </div>
                    <div className={styles.box}>
                        <h3>Connect</h3>
                        <a href="https://www.linkedin.com/in/aditya-more-682233274"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© 2024 Company. All Rights Reserved.</p>
                    <p>Design by <span>Aditya More</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
