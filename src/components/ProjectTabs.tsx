import React from 'react';
import { useProjectStore } from '../store/useProjectStore';
import type { ProjectCategory } from '../types/project';

const ProjectTabs: React.FC = () => {
    const { activeCategory, setActiveCategory, projects } = useProjectStore();

    const categories: { label: ProjectCategory; count: number }[] = [
        { label: 'E-COMMERCE', count: projects.filter(p => p.category === 'E-COMMERCE').length },
        { label: 'WEBSITE', count: projects.filter(p => p.category === 'WEBSITE').length },
        { label: 'APP', count: projects.filter(p => p.category === 'APP').length },
    ];

    return (
        <div className="container tabs-container">
            <div className="tabs-list">
                {categories.map((cat) => (
                    <button
                        key={cat.label}
                        onClick={() => setActiveCategory(cat.label)}
                        className={`tab-button ${activeCategory === cat.label ? 'active' : ''}`}
                    >
                        {cat.label} [{cat.count || 0}]
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProjectTabs;
