import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';
import './ServicePage.css';
import mahaDashboard from '../assets/maha_dashboard.png';
import mahaMeeting from '../assets/maha_meeting.png';
import mahaPayment from '../assets/maha_payment.png';
import mahaData from '../assets/maha_data.png';

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, value, {
                duration: 2,
                ease: "easeOut",
            });
            return animation.stop;
        }
    }, [isInView, count, value]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const ServicePage: React.FC = () => {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="container hero-container-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hero-content"
                    >
                        <span className="section-tag">WHAT DO WE DO?</span>
                        <h1 className="hero-title">We don't just build website.</h1>
                        <h2 className="hero-subtitle">
                            We help build digital products functional and impactful.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-description"
                    >
                        <p>
                            Our job is to make it more human. To build digital products, that help
                            businesses do better, be better and show up in a way that makes our
                            consumers' lives better.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="service-stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stats-left">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="stats-heading"
                            >
                                WE ARE WITH YOU FOR THE LONG HAUL
                            </motion.h2>

                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="stats-heading"
                            >
                                WE KNOW WHAT IT TAKES TO LAUNCH
                            </motion.h2>
                        </div>

                        <div className="stats-right">
                            <div className="stat-item">
                                <p className="stat-text">
                                    As you scale, launch your products, and go into new markets, we
                                    continue to support your business and get people excited all over
                                    again.
                                </p>
                                <h3 className="stat-number">2.3 YEARS</h3>
                                <p className="stat-label">Industry average length of client - onenex relationship</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-text">
                                    We have launched hundreds of products across categories.
                                    We have seen it all, done it all.
                                </p>
                                <div className="stat-numbers-row">
                                    <div className="stat-sub">
                                        <h3 className="stat-number">
                                            <Counter value={27} />
                                        </h3>
                                        <p className="stat-label">Industries Sector</p>
                                    </div>
                                    <div className="stat-sub">
                                        <h3 className="stat-number">
                                            <Counter value={124} suffix="+" />
                                        </h3>
                                        <p className="stat-label">Product Launch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="stats-banner"
                    >
                        WE'RE AN EXTENSION OF YOUR TEAM. ONE GOAL, ONE TEAM AND ONE BIG PRODUCT.
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section Moved or Removed */}

            {/* Portfolio Collage Section */}
            <section className="service-portfolio">
                <div className="container portfolio-container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="portfolio-content"
                    >
                        <div className="portfolio-tag"><span>MAHA MFI</span></div>
                        <h2 className="portfolio-title">PUSHING BOUNDARIES</h2>
                    </motion.div>

                    {/* Dynamic Collage Simulation with Floating Animations */}
                    <div className="collage-grid">
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="collage-item item-1"
                            style={{ backgroundImage: `url(${mahaMeeting})` }}
                        ></motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="collage-item item-2"
                            style={{ backgroundImage: `url(${mahaDashboard})` }}
                        ></motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="collage-item item-3"
                            style={{ backgroundImage: `url(${mahaPayment})` }}
                        ></motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="collage-item item-4"
                            style={{ backgroundImage: `url(${mahaData})` }}
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: [10, 15, 10] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="collage-item item-5"
                            style={{ backgroundImage: `url(${mahaMeeting})`, opacity: 0.3 }}
                        ></motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
