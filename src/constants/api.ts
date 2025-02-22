import {BASE_URL} from "@constants/urls";

export const API_PATH = {
    auth:{
        login: `${BASE_URL}/api/auth/login`,
        logout: `${BASE_URL}/api/auth/logout`
    },
    photos: `${BASE_URL}/api/photos`,
    project:`${BASE_URL}/api/project`,
    projects:`${BASE_URL}/api/projects`,
}
