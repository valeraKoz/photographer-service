import axios, {AxiosResponse} from "axios";
import {API_PATH} from "@constants/api";
import {getAllProjectType} from "@/lib/db/types";
import {IProject} from "@myPrisma/types";
import {useQuery} from "@tanstack/react-query";

const getAllProjects:getAllProjectType = async () => {
    const response:AxiosResponse<IProject[]> = await axios.get(API_PATH.projects)
    return response.data
}

export const useGetAllProjects = () =>{
    return useQuery({
        queryKey: ['projects'],
        queryFn: getAllProjects,
        select: (data)=>data
    })
}