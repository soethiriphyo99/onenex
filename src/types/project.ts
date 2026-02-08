export type ProjectCategory = 'E-COMMERCE' | 'WEBSITE' | 'APP';

export interface Project {
    id: number;
    title: string;
    description: string;
    category: ProjectCategory;
    image: string;
    client: string;
}

export interface ProjectStore {
    projects: Project[];
    loading: boolean;
    error: string | null;
    activeCategory: ProjectCategory;
    fetchProjects: () => Promise<void>;
    setActiveCategory: (category: ProjectCategory) => void;
}
