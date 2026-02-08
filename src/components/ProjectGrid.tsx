import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjectStore } from '../store/useProjectStore';

import { useShallow } from 'zustand/react/shallow';

const ProjectGrid: React.FC = () => {
    const { projects, loading, error, fetchProjects, activeCategory } = useProjectStore(
        useShallow((state) => ({
            projects: state.projects,
            loading: state.loading,
            error: state.error,
            fetchProjects: state.fetchProjects,
            activeCategory: state.activeCategory,
        }))
    );

    const filteredProjects = useMemo(() =>
        projects.filter(p => p.category === activeCategory),
        [projects, activeCategory]
    );

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    if (loading) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <p>Loading projects...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center', color: 'red' }}>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="container project-grid-wrapper" style={{ paddingBottom: '8rem' }}>
            <motion.h2
                key={activeCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="category-header"
            >
                {activeCategory}
            </motion.h2>

            <motion.div
                layout
                className="project-grid-new"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`project-card-new ${index % 2 !== 0 ? 'reverse' : ''}`}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-info">
                                <span className="project-index">0{index + 1}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-client">{project.client}</p>
                                <p className="view-project-btn">VIEW CASE STUDY</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ProjectGrid;
