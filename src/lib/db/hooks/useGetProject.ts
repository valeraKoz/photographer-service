import {getProjectType} from "@/lib/db/types";
import axios, {AxiosResponse} from "axios";
import {IProject} from "@myPrisma/types";
import {API_PATH} from "@constants/api";
import {useQuery} from "@tanstack/react-query";
import {DB_QueryKeys} from "@lib/db/hooks/index";

const getProject:getProjectType = async (projectId) => {
    const response: AxiosResponse<IProject> = await axios.get(`${API_PATH.project}/${projectId}`)
    return response.data
}

export const useGetProjectById = (projectId:number) => {
    return useQuery({
        queryKey:[DB_QueryKeys.projects, projectId],
        queryFn: () => getProject(projectId),
        select: data => data
    })
}