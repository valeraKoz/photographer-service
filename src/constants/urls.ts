export const BASE_URL = 'http://localhost:3000';


export const APP_PATH = {
    BASE_URL: 'http://localhost:3000',
    dashboard: {
        main: '/dashboard',
        disk: '/dashboard/disk',
        projects: '/dashboard/disk/projects',

        projectId: (id:number|string) => `/dashboard/disk/projects/${id}`
    }
}