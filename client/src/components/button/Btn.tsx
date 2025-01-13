import React from "react";
import type { Button } from '../../types/btn.types';

type ButtonTypesProps = {
    button: Button;
}

const Btn: React.FC<ButtonTypesProps> = ({ button }) => {
    return (
        <button className="bg-teal-800 text-white px-4 py-2 rounded">{button.content}</button>
    );
}

export default Btn;