import React from 'react';
import type { TeamTagType } from '../../types/team.types';
import Btn from '../button/Btn';

type TeamTagProps = {
    teamTag: TeamTagType;
    onRemove: () => void; // Function to remove the tag
};

const TeamTag: React.FC<TeamTagProps> = ({ teamTag, onRemove }) => {
    return (
        <div className="bg-teal-700 px-4 py-2 text-white w-fit flex gap-2 items-center rounded-lg">
            <Btn button={{ content: "X" }} onClick={onRemove} />
            {teamTag.teamName}
        </div>
    );
};

export default TeamTag;