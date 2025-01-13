import React from 'react';
import type { TeamTagType } from '../../types/team.types';
import Btn from '../button/Btn';

type TeamTagProps = {
    teamTag: TeamTagType;
};

const TeamTag: React.FC<TeamTagProps> = ({ teamTag }) => {
    return (
        <div className="bg-teal-700 px-4 py-2 text-white w-fit flex gap-2 items-center rounded-lg">
            <Btn button={{ content: "X" }} />
            {teamTag.teamName}
        </div>
    );
};

export default TeamTag;