import {createProjectType} from "@/lib/db/types";
import axios, {AxiosResponse} from "axios";
import {IProject} from "@myPrisma/types";
import {API_PATH} from "@constants/api";
import {useMutation} from "@tanstack/react-query";
import {DB_QueryKeys} from "@lib/db/hooks/index";
import {queryClient} from "@lib/queryClient/query-client";


const createProject:createProjectType = async (project) => {
    const response: AxiosResponse<IProject> = await axios.post(API_PATH.projects, project)
    return response.data
}

export const useCreateProject = () => {
    return useMutation({
        mutationKey: [DB_QueryKeys.projects],
        mutationFn: createProject,
        onSuccess: (data)=>{
            queryClient.invalidateQueries({queryKey: [DB_QueryKeys.projects]})
            return data
        }
    })
}