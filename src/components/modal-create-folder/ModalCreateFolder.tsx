import {ModalTitle} from "@components/modal-title/ModalTitle";
import React, {Dispatch, SetStateAction} from "react";
import {IFolders} from "@myPrisma/types";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {useCreateFolder} from "@lib/db/hooks";
import {NewFormSection} from "@ui/form/NewFormSection";
import {InputForm} from "@ui/form/InputForm";
import {ModalButtons} from "@components/modal-buttons/ModalButtons";
import {useProjectId} from "@/app/dashboard/disk/projects/[id]/ProjectProvider";

export const ModalCreateFolder = (
    {setModalOpen}:
    {setModalOpen: Dispatch<SetStateAction<boolean>>}
) => {
    const {projectId} = useProjectId()

    const defaultValues: IFolders = {
        title: '',
        description: '',
        projectId
    }
    const methods = useForm<IFolders>({
        defaultValues,
        criteriaMode: 'all',
        mode: 'all'
    })
    const { handleSubmit, reset } = methods;
    const createFolder = useCreateFolder();

    const onSubmit: SubmitHandler<IFolders> = (data: IFolders) => {
        createFolder.mutate(data)
        setModalOpen(false)
        reset(defaultValues)
    }
    const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        setModalOpen(false);
        reset(defaultValues)
    }

    return (
        <>
            <ModalTitle title={'Cоздать папку'} callback={handleReset}/>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                    <NewFormSection>
                        <InputForm
                            required
                            id='title'
                            name='title'
                            label='Название папки'
                            placeholder='Название папки'
                            rules={{
                                required: 'Поле "Название папки" не может быть пустым',
                                validate:{
                                    regExp: (value: string)=> {
                                        return (
                                            /^[\p{L}\s\d-]+$/gu.test(value) || 'Только буквы, цифры, пробелы и тире!'
                                        )
                                    }
                                }
                            }}
                        />
                        <InputForm
                            id='description'
                            name='description'
                            label='Описание'
                            placeholder='Небольшое описание'
                        />
                    </NewFormSection>
                    <ModalButtons callback={handleReset}/>
                </form>
            </FormProvider>
        </>
    )
}