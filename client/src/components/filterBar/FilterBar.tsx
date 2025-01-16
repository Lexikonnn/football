import React, { useState } from 'react';
import TeamTag from '../teamTag/TeamTag';
import InputField from '../inputField/InputField';
import Btn from '../button/Btn';
import FilterDropdown from './FilterDropdown';
import DatePicker from 'react-datepicker';
import { addTeamTag, removeTeamTag } from '../../utils/teamTagUtils';
import 'react-datepicker/dist/react-datepicker.css';

type FilterBarProps = {
    onFilterChange: (status: string) => void;
    onTeamTagsChange: (tags: string[]) => void;
    onDateRangeChange: (startDate: Date | null, endDate: Date | null) => void; // New prop for date range
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange, onTeamTagsChange, onDateRangeChange }) => {
    const [teamName, setTeamName] = useState<string>(''); // Input value
    const [teamTags, setTeamTags] = useState<string[]>([]); // Array of team tags
    const [startDate, setStartDate] = useState<Date | null>(null); // Start date
    const [endDate, setEndDate] = useState<Date | null>(null); // End date

    const handleInputChange = (value: string) => {
        setTeamName(value);
    };

    const handleAddTag = () => {
        const updatedTags = addTeamTag(teamTags, teamName);
        setTeamTags(updatedTags);
        onTeamTagsChange(updatedTags);
        setTeamName(''); // Clear input field
    };

    const handleRemoveTag = (tag: string) => {
        const updatedTags = removeTeamTag(teamTags, tag);
        setTeamTags(updatedTags);
        onTeamTagsChange(updatedTags);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAddTag();
        }
    };

    const handleDateChange = (start: Date | null, end: Date | null) => {
        setStartDate(start);
        setEndDate(end);
        onDateRangeChange(start, end); // Notify parent of date range change
    };

    return (
        <div className="bg-white w-full p-4">
            <div className="flex flex-row gap-4 items-center">
                <InputField
                    inputField={{ label: "Team name:", placeholder: "Enter team name..." }}
                    value={teamName}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Handle Enter key
                />
                <Btn
                    button={{ content: "Enter" }}
                    onClick={handleAddTag}
                    disabled={!teamName.trim()} // Disable button if input is empty
                />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                {teamTags.map((tag) => (
                    <TeamTag
                        key={tag}
                        teamTag={{ teamName: tag }}
                        onRemove={() => handleRemoveTag(tag)} // Pass remove function
                    />
                ))}
            </div>

            <FilterDropdown
                label="Filter by Status"
                options={['All', 'future', 'past', 'ongoing']}
                onChange={(value) => onFilterChange(value === 'All' ? '' : value)}
            />

            {/* DatePicker for Start and End Dates */}
            <div className="flex gap-4 mt-4">
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => handleDateChange(date, endDate)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => handleDateChange(startDate, date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="End Date"
                />
            </div>
        </div>
    );
};

export default FilterBar;