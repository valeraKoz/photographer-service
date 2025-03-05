import {IFolders} from "@myPrisma/types";
import {useCreateFolder} from "@lib/db/hooks";

export const useCreateDefaultFolder = (projectId: number) => {
    const createFolder = useCreateFolder();
    const defaultSetting: IFolders = {
        title: "Исходники",
        projectId
    }
    return ()=> createFolder.mutateAsync(defaultSetting);
}