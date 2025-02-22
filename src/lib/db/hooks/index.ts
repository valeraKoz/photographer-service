import {addPhotoInFolder} from "@lib/db/hooks/addPhotoInFolder";
import {useCreateFolder} from "@lib/db/hooks/useCreateFolder";
import {useCreateProject} from "@lib/db/hooks/useCreateProject";
import {useDeleteFolderByProjectAndFolderId} from "@lib/db/hooks/useDeleteFolderByProjectAndFolderId";
import {deletePhoto} from "@lib/db/hooks/deletePhoto";
import {useDeleteProjectById} from "@lib/db/hooks/useDeleteProjectById";
import {useGetAllFolders} from "@lib/db/hooks/useGetAllFolders";
import {getPhotoFromFolder} from "@lib/db/hooks/getPhotoFromFolder";
import {useGetProjectById} from "@lib/db/hooks/useGetProject";

import {useGetAllProjects} from "@lib/db/hooks/useGetAllProjects";

export {
    getPhotoFromFolder,
    addPhotoInFolder,
    deletePhoto,

    useGetAllFolders,
    useCreateFolder,
    useDeleteFolderByProjectAndFolderId,

    useGetAllProjects,
    useCreateProject,
    useDeleteProjectById,
    useGetProjectById,

}

export const DB_QueryKeys = {
    folders: 'folders',
    projects: 'projects',
    photos: 'photos',
}

