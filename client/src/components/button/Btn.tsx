import React from "react";
import type { Button } from '../../types/btn.types';

type ButtonTypesProps = {
    button: Button;
    onClick?: () => void;
    disabled?: boolean;
};

const Btn: React.FC<ButtonTypesProps> = ({ button, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-teal-800 text-white px-4 py-2 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {button.content}
        </button>
    );
}

export default Btn;