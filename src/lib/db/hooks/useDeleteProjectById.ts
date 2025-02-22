import {deleteProjectType} from "@/lib/db/types";
import axios, {AxiosResponse} from "axios";
import {IProject} from "@myPrisma/types";
import {API_PATH} from "@constants/api";
import {useMutation} from "@tanstack/react-query";
import {queryClient} from "@lib/queryClient/query-client";
import {DB_QueryKeys} from "@lib/db/hooks/index";

export const deleteProject:deleteProjectType = async (projectId) => {
    const response: AxiosResponse<IProject> = await axios.delete(`${API_PATH.project}/${projectId}`)
    return response.data
}

export const useDeleteProjectById = () => {
    return useMutation({
        mutationKey:[DB_QueryKeys.projects],
        mutationFn: deleteProject,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: [DB_QueryKeys.projects]})
        }
    })
}