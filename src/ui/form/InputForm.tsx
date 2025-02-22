import '@components/modal-create-project/style.css'
import {useFormContext} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {BiError} from "react-icons/bi";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    name: string;
    rules: object;
}

export const InputForm = ({id, type = 'text',rules ,name, label}:InputProps)=>{
    const {register, formState: {errors}} = useFormContext();
    const error = errors[name];



    return (
        <div className='input__wrapper flex flex-col'>
            <div className="input__content flex flex-col gap-2">
                {label && <label className='text-sm' htmlFor={name}>{label}</label>}
                <input
                    id={id}
                    type={type}
                    {...register(name,rules)}
                    aria-invalid={error ? 'true': "false"}
                    className={`custom-input border rounded text-md py-2 px-4 outline-none focus:border-black ${error? 'error-input': ''} `}
                />
            </div>
            <ErrorMessage errors={errors} name={name} render={({messages})=>{
                return messages ? Object.entries(messages).map(([type, message]) =>
                        <p className='error-message text-red-500 text-xs flex items-center gap-1' key={type}><BiError/>{message}</p>
                ) : null
            }}/>
        </div>
    )
}