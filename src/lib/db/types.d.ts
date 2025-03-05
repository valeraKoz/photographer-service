import {
    IProject,
    IProjectCreate,
    IFolders,
    IPhoto,
    IUser
} from "@myPrisma/types";

type getAllProjectType = () => Promise<IProject[]>;
type getProjectType = (projectId: number)=> Promise<IProject>;
type createProjectType = (project: IProjectCreate) => Promise<IProject>;
type deleteProjectType = (projectId: number) => Promise<IProject>;

type getAllFoldersType = (projectId:number) => Promise<IFolders[]>;
type createFolderType = (data: IFolders) => Promise<IFolders>
type deleteFolderType = ({projectId, folderId}:{projectId:number, folderId: number}) => Promise<IFolders>

type getPhotoFromFolderType = (folderId: number)=>Promise<IPhoto[] | []>
export type IProjectCreate = IProject & {dayToDelete: string}