import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';
import TeamTag from '../teamTag/TeamTag';
import InputField from '../inputField/InputField';

type FilterBarProps = {
    onFilterChange: (status: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
    const [teamName, setTeamName] = useState<string>('');

    const handleInputChange = (value: string) => {
        setTeamName(value);
        console.log('Input Value:', value);
    };

    return (
        <div className="bg-white w-full p-4">
            <InputField inputField={
                { label: "Team name:", placeholder: "Team name..." }
            }
                onChange={handleInputChange}
            />
            <TeamTag teamTag={{ teamName }} />
            <FilterDropdown
                label="Filter by Status"
                options={['All', 'future', 'past', 'ongoing']}
                onChange={(value) => onFilterChange(value === 'All' ? '' : value)} // Převod 'All' na ''
            />
        </div>
    );
};

export default FilterBar;