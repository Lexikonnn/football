import React from 'react';
import FilterDropdown from './FilterDropdown';
import TeamTag from '../teamTag/TeamTag';

type FilterBarProps = {
    onFilterChange: (status: string) => void; // Callback pro změnu filtru
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
    return (
        <div className="bg-white w-full p-4">
            <TeamTag teamTag={{ teamName: "Team1" }} />
            <FilterDropdown
                label="Filter by Status"
                options={['All', 'future', 'past', 'ongoing']}
                onChange={(value) => onFilterChange(value === 'All' ? '' : value)} // Převod 'All' na ''
            />
        </div>
    );
};

export default FilterBar;