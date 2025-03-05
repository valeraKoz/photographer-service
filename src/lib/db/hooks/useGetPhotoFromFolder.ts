import {getPhotoFromFolderType} from "@lib/db/types";
import axios, {AxiosResponse} from "axios";
import {IPhoto} from "@myPrisma/types";
import {API_PATH} from "@constants/api";
import {useQuery} from "@tanstack/react-query";
import {DB_QueryKeys} from "@lib/db/hooks/index";

const getPhotoFromFolder: getPhotoFromFolderType = async (folderId) => {
    const response: AxiosResponse<IPhoto[] | []> = await axios.get(`${API_PATH.photos}/${folderId}`)
    return response.data
}

export const useGetPhotoFromFolder = (folderId: number) => {
    return useQuery({
        queryKey:[DB_QueryKeys.photos, folderId],
        queryFn: ()=>getPhotoFromFolder(folderId),
        select: data=>data
    })
}