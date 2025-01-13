import React, { FC } from 'react';
import { InputField as InputFieldType } from '../../types/inputField';

type InputFieldProps = {
    inputField: InputFieldType;
    onChange?: (value: string) => void;
};

const InputField: FC<InputFieldProps> = ({ inputField, onChange=() => {} }) => {
    return (
        <div className='flex flex-col'>
            <label className='text-base font-medium'>{inputField.label}</label>
            <input className='px-4 py-2 border-2 border-slate-50'
                placeholder={inputField.placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default InputField;