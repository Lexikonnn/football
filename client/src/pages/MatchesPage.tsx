import React, { useState } from 'react';
import FilterBar from '../components/filterBar/FilterBar';
import MatchList from '../components/matchList/MatchList';

const MatchesPage: React.FC = () => {
    const [filter, setFilter] = useState<string>(''); // Status filter
    const [teamTags, setTeamTags] = useState<string[]>([]); // Team tags filter
    const [startDate, setStartDate] = useState<Date | null>(null); // Start date
    const [endDate, setEndDate] = useState<Date | null>(null); // End date

    return (
        <div>
            <h1 className="text-2xl mb-4">Matches Page</h1>

            <FilterBar
                onFilterChange={(status) => setFilter(status)}
                onTeamTagsChange={(tags) => setTeamTags(tags)}
                onDateRangeChange={(start, end) => {
                    setStartDate(start);
                    setEndDate(end);
                }}
            />

            <MatchList
                filter={filter}
                teamTags={teamTags}
                startDate={startDate || undefined} // Ensure undefined is passed instead of null
                endDate={endDate || undefined} // Ensure undefined is passed instead of null
            />
        </div>
    );
};

export default MatchesPage;