import React from 'react';
import { motion } from 'framer-motion';

interface TalkProjectProps {
    onContactClick?: () => void;
    hideButton?: boolean;
}

const TalkProject: React.FC<TalkProjectProps> = ({ onContactClick, hideButton = false }) => {
    return (
        <section className="talk-project-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="talk-content"
                >
                    <p className="talk-sub">SEEKING PARTNERS IN CHANGE?</p>
                    <h2 className="talk-heading">
                        Let's talk about <br /> your project.
                    </h2>
                    {!hideButton && (
                        <button
                            onClick={onContactClick}
                            className="talk-btn"
                        >
                            GET IN TOUCH <span className="arrow">→</span>
                        </button>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default TalkProject;
