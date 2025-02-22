import {deleteFolderType} from "@/lib/db/types";
import axios, {AxiosResponse} from "axios";
import {IFolders} from "@myPrisma/types";
import {API_PATH} from "@constants/api";
import {useMutation} from "@tanstack/react-query";
import {DB_QueryKeys} from "@lib/db/hooks/index";
import {queryClient} from "@lib/queryClient/query-client";

const deleteFolder: deleteFolderType = async ({projectId, folderId}) => {
    const response: AxiosResponse<IFolders> = await axios.delete(`${API_PATH.project}/${projectId}/folders/${folderId}`)
    return response.data;
}

export const useDeleteFolderByProjectAndFolderId = () => {
    return useMutation({
        mutationKey: [DB_QueryKeys.folders],
        mutationFn: deleteFolder,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: [DB_QueryKeys.folders]})
        }
    })
}