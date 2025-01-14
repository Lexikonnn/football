import React, { useState } from 'react';
import TeamTag from '../teamTag/TeamTag';
import InputField from '../inputField/InputField';
import Btn from '../button/Btn';
import FilterDropdown from './FilterDropdown';

type FilterBarProps = {
    onFilterChange: (status: string) => void;
    onTeamTagsChange: (tags: string[]) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange, onTeamTagsChange }) => {
    const [teamName, setTeamName] = useState<string>(''); // Input value
    const [teamTags, setTeamTags] = useState<string[]>([]); // Array of team tags

    const handleInputChange = (value: string) => {
        setTeamName(value); // Update input field value
    };

    const handleAddTag = () => {
        const normalizedTeamName = teamName.trim().toLowerCase(); // Normalize input to lowercase

        // Add the tag only if it's not empty and not already in the list (case-insensitive)
        if (normalizedTeamName && !teamTags.some((tag) => tag.toLowerCase() === normalizedTeamName)) {
            const updatedTags = [...teamTags, teamName]; // Keep original capitalization in tags
            setTeamTags(updatedTags); // Update the tags array
            onTeamTagsChange(updatedTags); // Notify parent of changes
            setTeamName(''); // Clear the input field
        }
    };

    const handleRemoveTag = (tag: string) => {
        const updatedTags = teamTags.filter((t) => t !== tag); // Remove tag
        setTeamTags(updatedTags);
        onTeamTagsChange(updatedTags);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission or other default behavior
            handleAddTag(); // Trigger the tag addition
        }
    };

    return (
        <div className="bg-white w-full p-4">
            <div className='flex flex-row gap-4 items-center'>
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
        </div>
    );
};

export default FilterBar;