import {createFolderType} from "@/lib/db/types";
import axios, {AxiosResponse} from "axios";
import {IFolders} from "@myPrisma/types";
import {API_PATH} from "@constants/api";
import {useMutation} from "@tanstack/react-query";
import {queryClient} from "@lib/queryClient/query-client";

const createFolder:createFolderType = async (data) => {
    const response: AxiosResponse<IFolders> = await axios.post(`${API_PATH.project}/${data.projectId}/folders`, data)
    return response.data;
}

export const useCreateFolder = () => {
    return useMutation({
        mutationFn: createFolder,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ['folders']})
        }

    })
}