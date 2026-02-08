import type { Project, ProjectCategory } from '../types/project';

const API_BAR_URL = 'https://dummyjson.com/products?limit=50';

export const projectService = {
    getProjects: async (): Promise<Project[]> => {
        const response = await fetch(API_BAR_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        const data = await response.json();

        // Mapping DummyJSON products to Onenex-style projects
        const mappedProjects: Project[] = data.products.map((p: any, index: number) => {
            let category: ProjectCategory = 'WEBSITE';
            if (index < 3) category = 'E-COMMERCE';
            else if (index < 9) category = 'WEBSITE';
            else if (index < 12) category = 'APP';

            return {
                id: p.id,
                title: p.title,
                description: p.description,
                category,
                image: p.thumbnail,
                client: p.brand || 'Premium Client'
            };
        }).filter((_: Project, index: number) => index < 12); // Limit to the requested total

        return mappedProjects;
    }
};
