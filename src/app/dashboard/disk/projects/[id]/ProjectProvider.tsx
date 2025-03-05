'use client'
import {createContext, ReactNode, useContext} from "react";

type ProjectContextType = {
    projectId: number;
};

const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider(
    {children, projectId,}:
    {children: ReactNode; projectId: number; }) {
    
    return (
        <ProjectContext.Provider value={{ projectId }}>
            {children}
        </ProjectContext.Provider>
    );
}

export function useProjectId() {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProject must be used within a ProjectProvider");
    }
    return context;
}