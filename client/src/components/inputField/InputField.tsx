import React from 'react';

type InputFieldProps = {
    inputField: { label: string; placeholder: string };
    value: string;
    onChange: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Optional keydown handler
};

const InputField: React.FC<InputFieldProps> = ({ inputField, value, onChange, onKeyDown  }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <label>{inputField.label}</label>
            <input
                type="text"
                placeholder={inputField.placeholder}
                value={value} // Controlled input
                onChange={handleChange}
                onKeyDown={onKeyDown} // Capture keydown events
                className="border rounded px-2 py-1"
            />
        </div>
    );
};

export default InputField;