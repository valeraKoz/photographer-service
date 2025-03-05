import {createFolderType} from "@/lib/db/types";
import axios, {AxiosResponse} from "axios";
import {IFolders} from "@myPrisma/types";
import {API_PATH} from "@constants/api";
import {useMutation} from "@tanstack/react-query";
import {queryClient} from "@lib/queryClient/query-client";
import {DB_QueryKeys} from "@lib/db/hooks/index";

const createFolder:createFolderType = async (data) => {
    console.log('Create folder')
    const response: AxiosResponse<IFolders> = await axios.post(`${API_PATH.project}/${data.projectId}/folders`, data)
    return response.data;
}

export const useCreateFolder = () => {
    return useMutation({
        mutationFn: createFolder,
        onSuccess: (data, variables, context)=>{
            queryClient.invalidateQueries({queryKey: [DB_QueryKeys.folders, data.projectId]});
            return {
                data,
                variables,
                context
            }
        },
    })
}