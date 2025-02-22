'use client'
import React from "react";
import {
    useCreateFolder, useCreateProject,
    useDeleteFolderByProjectAndFolderId,
    useDeleteProjectById,
    useGetAllFolders
} from "@lib/db/hooks";
import {IFolders} from "@myPrisma/types";
import {IProjectCreate} from "@lib/db/types";

const projectId = 20;

const folderCreateData = {title: 'Название папки 1', projectId}

const deleteFolderData = {
    projectId,
    folderId: 18
}
const createProjectData: IProjectCreate = {
    title: 'Создать проект тестовая 123 - 123',
    uniqueLink: '/test-unique-link',
    dayToDelete: '30'
}




export default function Home(){
    const {data, isLoading, isError, error} = useGetAllFolders(19)
    const createFolder= useCreateFolder()
    const deleteProject = useDeleteProjectById();
    const deleteFolder = useDeleteFolderByProjectAndFolderId()
    const createProject = useCreateProject();

    const handleCreateFolder = async (data: IFolders) => {
        createFolder.mutate(data)
    }
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-20">
        Home:
        <button onClick={()=> createProject.mutate(createProjectData)}>Создать проект</button>
        <button onClick={()=> deleteFolder.mutate(deleteFolderData)}>Удалить папку</button>
        <button onClick={()=> deleteProject.mutate(projectId)}>Удалить проект</button>
        {
            isLoading ? 'Загрузка...' : (isError ? error.message : (
                data ? data.map(folder => (
                    <p key={folder.id}>{folder.title}</p>
                )) : null
            ))
        }

        <button onClick={()=>handleCreateFolder(folderCreateData)}>CreateFolder</button>
        {
            createFolder.isPending ? 'Добавляется...' : (
                createFolder.isError ? createFolder.error.message : null
            )
        }
        {
            createFolder.isSuccess ? 'Добавлено' : null
        }
    </div>
  );
}
