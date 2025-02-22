import React, {Dispatch, SetStateAction} from "react";
import { IoClose } from "react-icons/io5";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {NewFormSection} from "@ui/form/NewFormSection";
import {InputForm} from "@ui/form/InputForm";
import {SelectForm} from "@ui/form/SelectForm";
import {translit} from "@utils/lib/toTranslit";
import {makeid} from "@utils/lib/makeId";
import {redirect} from "next/navigation";
import {APP_PATH} from "@constants/urls";
import {IProjectCreate} from "@/lib/db/types";
import {useCreateProject} from "@lib/db/hooks";

export const ModalCreateProject = (
    {
        modalTitle = "Новый проект",
        setModalOpen
    }:
    {
        modalTitle?:string,
        setModalOpen: Dispatch<SetStateAction<boolean>>
    })=> {

    /*
        title - название проекта
        photoshootDate - дата съемки
        autoDeleteDate - дата удаления (зависит от срока хранения)
        creationDate - дата создания проекта
        uniqueLink - генерируется уникальная ссылка
     */
    const defaultSetting: IProjectCreate = {
        title: '',
        photoshootDate: undefined,
        creationDate: new Date(),
        autoDeleteDate: undefined,
        uniqueLink: '',
        dayToDelete: '30'
    }

    const methods = useForm<IProjectCreate>({
        defaultValues: defaultSetting,
        criteriaMode: 'all',
        mode: 'all'
    })
    const { handleSubmit, reset } = methods;
    const createProject = useCreateProject();


    const onSubmit: SubmitHandler<IProjectCreate> = async (data: IProjectCreate) => {
        const date = new Date();

        data.title = data.title.replace(/\s\s+/g,' ') // убрать лишние пробелы
        // с русского на английский + дата + рандомный айди
        data.uniqueLink =
            `/${translit(data.title)
                .replace(/\s-/g,'-')    // пробел+тире=тире
                .replace(/-\s/g,'-')    // тире+пробел=тире
                .replace(/\s-\s/g,'-')  // пробел+тире+пробел=тире
                .replace(/\s/g, '-')    // пробел=тире
                }-${data.photoshootDate}-${makeid(6)}`
        data.photoshootDate = new Date(data.photoshootDate!)
        // добавляет кол-во дней к настоящему дню (через сколько удалиться проект)
        data.autoDeleteDate = new Date(date.setDate(date.getDate() + +data.dayToDelete))


        // async для редиректа
        createProject.mutate(data, {
            onSuccess: async (data)=>{
                const projectId = await data.id
                if(projectId) redirect(`${APP_PATH.BASE_URL+APP_PATH.dashboard.projectId(projectId)}`)
            }});


    }

    const handleReset = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setModalOpen(false);
        reset(defaultSetting)
    }

    return (
        <div className='modal-project-setting min-w-[500px] p-8 bg-white rounded-lg flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl'>{modalTitle}</h1>
                <button
                    onClick={(e) => handleReset(e)}
                    className='bg-neutral-200 p-2 rounded'>
                    <IoClose/>
                </button>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                    <NewFormSection>
                        <InputForm
                            required
                            id='title'
                            name='title'
                            label='Название проекта'
                            placeholder='Например: Детская'
                            rules={{
                                required: 'Поле "Название проекта" не может быть пустым',
                                validate:{
                                    regExp: (value: string)=> {
                                        return (
                                            /^[\p{L}\s\d-]+$/gu.test(value) || 'Только буквы, цифры, пробелы и тире!'
                                        )
                                    }
                                }
                            }}/>
                        <InputForm
                            required
                            id='photoshootDate'
                            name='photoshootDate'
                            label='Дата съемки'
                            type='date'
                            rules={{
                                required: 'Поле "Дата съемки" не может быть пустым',
                            }}/>
                        <SelectForm required name={'dayToDelete'} title='Срок хранения' defaultValue='30'/>
                    </NewFormSection>
                    <div className='flex gap-2 justify-end'>
                        <button
                            onClick={(e) => handleReset(e)}
                            className='w-1/4 p-2 rounded text-sm text-white bg-neutral-800'>
                            Отмена
                        </button>
                        <button
                            className='w-1/4 bg-neutral-300 text-sm p-2 rounded'
                            type="submit">
                            Добавить
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}