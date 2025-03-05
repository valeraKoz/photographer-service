import {useRef, useState} from "react";
import axios, {CanceledError} from "axios";
import {API_PATH} from "@constants/api";
import {queryClient} from "@lib/queryClient/query-client";
import {DB_QueryKeys} from "@lib/db/hooks";
import {useProjectId} from "@/app/dashboard/disk/projects/[id]/ProjectProvider";
import {useCreateDefaultFolder} from "@lib/helpers/create-default-folder";

type UploadStatus = "idle" | "loading" | "success" | "error";
type FileUploadProgress = {
    file: File;
    loaded: number;
    total: number;
    status: UploadStatus;
    error?: Error;
};

export const usePhotoUpload = (
    files: FileList | undefined, folderId?: number
) => {

    const {projectId} = useProjectId();
    const {createDefault,folderId:newFolderId} = useCreateDefaultFolder(projectId)
    const [queue, setQueue] = useState<FileUploadProgress[]>([]);
    const [status, setStatus] = useState<UploadStatus>('idle');
    const [error, setError] = useState<Error | null | string>(null);
    const abortControllers = useRef<AbortController[]>([]);

    const totalProgress = queue.reduce((sum, file) => sum + file.loaded, 0);
    const totalSize = queue.reduce((sum, file) => sum + file.total, 0);


    if(!folderId) {
        createDefault();
        folderId = newFolderId;
    }




    const startUpload = async (files: FileList) => {
        if (!files?.length) return;

        const initialQueue = Array.from(files).map(file => ({
            file,
            loaded: 0,
            total: file.size,
            status: "idle" as UploadStatus
        }))
        setQueue(initialQueue);


        for (let i = 0; i < initialQueue.length; i++) {
            const controller = new AbortController();
            abortControllers.current.push(controller);
            try {
                const formData = new FormData();
                formData.append(DB_QueryKeys.photos, initialQueue[i].file);
                formData.append('info',JSON.stringify({
                    title: initialQueue[i].file.name,
                    originalPhotoKey: `cloud/${projectId}/${folderId}/${initialQueue[i].file.name}`,
                    foldersId: folderId,
                    originalSize: initialQueue[i].total,
                }));

                setQueue(prevState => prevState.map((item, index) =>
                    index === i ? {...item, status: 'loading'} : item
                ))
                await axios.post(`${API_PATH.photos}/${folderId}`, formData, {
                    signal: controller.signal,
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.total) {
                            setQueue(prevState => prevState.map((item, index) =>
                                index === i ? {
                                    ...item,
                                    loaded: progressEvent.loaded,
                                    total: progressEvent.total || item.total
                                } : item
                            ))
                        }
                    },
                })
                setQueue(prevState => prevState.map((item, index) =>
                    index === i ? {...item, status: 'success'} : item
                ))
                queryClient.invalidateQueries({queryKey: [DB_QueryKeys.photos, folderId]})
            } catch (error) {
                if (error instanceof CanceledError) {
                    setQueue(prev => prev.map((item, index) =>
                        index === i ? {
                            ...item,
                            status: "error",
                            error: new Error("Загрузка отменена")
                        } : item
                    ));
                } else if (error instanceof Error) {
                    setQueue(prev => prev.map((item, index) =>
                        index === i ? {
                            ...item,
                            status: "error",
                            error
                        } : item
                    ));
                }
            }
        }
        setStatus(queue.every(file=>file.status === 'success') ? "success" : "error");
        abortControllers.current = []
    }



    const abortUpload = () =>{
        abortControllers.current.forEach(controller=>controller.abort());
        abortControllers.current = [];
        setStatus('error');
        setError('Загрузка отменена пользователем')
    }

    return {
        queue,
        status,
        error,
        totalSize,
        totalProgress,
        abortUpload,
        startUpload,
        isIdle: status === "idle",
        isLoading: status === "loading",
        isError: status === "error",
        isSuccess: status === "success",

    }
}