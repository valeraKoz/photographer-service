import {useFormContext} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message"
import {SelectHTMLAttributes} from "react";


interface InputProps extends SelectHTMLAttributes<HTMLSelectElement>{
    title?: string;
    name: string;
}

export const SelectForm = ({title, name, ...rest}:InputProps)=>{
    const {
        register, formState: {errors}
    } = useFormContext(); // Работает внутри FormProvider
    return (
        <div className='select__wrapper flex flex-col gap-2'>
            {title && <label className='text-sm' htmlFor={name}>{title}</label>}
            <select
                id={name}
                {...register(name)}
                {...rest}
                className={`custom-input border rounded text-md py-2 px-4 outline-none focus:border-black`}>
                <option value="14">14 дней</option>
                <option value="30">1 месяц</option>
                <option value="90">3 месяца</option>
                <option value="182">6 месяцев</option>
                <option value="365">1 год</option>
            </select>
            <ErrorMessage
                name={name}
                render={({ message }: {message: string | undefined}) => <span className="error-message">{message}</span>}
            />
        </div>
    )
}