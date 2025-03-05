import axios, {AxiosResponse} from "axios";
import {getAllFoldersType} from "@/lib/db/types";
import {IFolders} from "@myPrisma/types";
import {API_PATH} from "@constants/api";
import {useQuery} from "@tanstack/react-query";

export const getAllFolders:getAllFoldersType = async (projectId) => {
    const response: AxiosResponse<IFolders[]> = await axios.get(`${API_PATH.project}/${projectId}/folders`)
    return response.data;
}

export const useGetAllFolders = (projectId: number) => {
    return useQuery({
        queryKey: ['folders', projectId],
        queryFn: ()=>getAllFolders(projectId),
        select: data => data
    })
}