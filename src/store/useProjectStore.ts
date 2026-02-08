import { create } from 'zustand';
import type { ProjectStore, ProjectCategory } from '../types/project';
import { projectService } from '../services/projectService';

export const useProjectStore = create<ProjectStore>((set, get) => ({
    projects: [],
    loading: false,
    error: null,
    activeCategory: 'WEBSITE',

    fetchProjects: async () => {
        // Basic caching check
        if (get().projects.length > 0) return;

        set({ loading: true, error: null });
        try {
            const data = await projectService.getProjects();
            set({ projects: data, loading: false });
        } catch (err) {
            set({ error: (err as Error).message, loading: false });
        }
    },

    setActiveCategory: (category: ProjectCategory) => {
        set({ activeCategory: category });
    }
}));
