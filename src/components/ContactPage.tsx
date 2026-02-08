import React from 'react';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="container contact-container">
                <div className="contact-grid">
                    {/* Left Side: Hero Text */}
                    <div className="contact-hero">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="contact-title"
                        >
                            We're ready if you are. Let's get to it
                        </motion.h1>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form-section">
                        <form className="contact-form">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="form-group"
                            >
                                <input type="text" id="name" placeholder=" " required />
                                <label htmlFor="name">Name</label>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="form-group"
                            >
                                <input type="text" id="business" placeholder=" " />
                                <label htmlFor="business">Business (OPTIONAL)</label>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="form-group"
                            >
                                <input type="tel" id="phone" placeholder=" " required />
                                <label htmlFor="phone">Phone</label>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="form-group"
                            >
                                <input type="email" id="email" placeholder=" " required />
                                <label htmlFor="email">Email</label>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="form-group"
                            >
                                <textarea id="project" placeholder=" " rows={1}></textarea>
                                <label htmlFor="project">Tell us about your project</label>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="form-footer"
                            >
                                <button type="submit" className="submit-btn">
                                    SEND <span className="arrow">→</span>
                                </button>
                            </motion.div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
