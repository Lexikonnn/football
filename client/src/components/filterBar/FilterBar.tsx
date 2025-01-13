import React from 'react';
import FilterDropdown from '../filterDropdown/FilterDropdown';

type FilterBarProps = {
    onFilterChange: (status: string) => void; // Callback pro změnu filtru
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
    return (
        <div className="bg-white w-full p-4">
            <FilterDropdown
                label="Filter by Status"
                options={['All', 'future', 'past', 'ongoing']}
                onChange={(value) => onFilterChange(value === 'All' ? '' : value)} // Převod 'All' na ''
            />
        </div>
    );
};

export default FilterBar;