import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="hero container">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-subtext"
            >
                We are in the business of building capabilities for our clients,
            </motion.p>

            <div className="hero-marquee-container">
                <motion.div
                    className="hero-marquee-inner"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 15,
                        repeat: Infinity,
                    }}
                >
                    <div className="hero-marquee-item">
                        <span className="text-outline">CASE</span> STUDIES
                        <div className="line" />
                        <span className="text-outline">CASE</span> STUDIES
                        <div className="line" />
                    </div>
                    {/* Duplicate for seamless looping */}
                    <div className="hero-marquee-item">
                        <span className="text-outline">CASE</span> STUDIES
                        <div className="line" />
                        <span className="text-outline">CASE</span> STUDIES
                        <div className="line" />
                    </div>
                </motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="hero-bottom-text"
            >
                from startup to industry leaders
            </motion.p>
        </section>
    );
};

export default Hero;
