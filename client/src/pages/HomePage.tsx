import React, { useState } from 'react';
import FilterBar from '../components/filterBar/FilterBar';
import MatchList from '../components/matchList/MatchList';

const HomePage: React.FC = () => {
    const [filter, setFilter] = useState<string>(''); // State for selected filter
    const [teamTags, setTeamTags] = useState<string[]>([]); // State for team tags

    return (
        <div>
            <h1 className="text-2xl mb-4">HomePage</h1>

            {/* Pass state handlers to FilterBar */}
            <FilterBar
                onFilterChange={(status) => setFilter(status)}
                onTeamTagsChange={(tags) => setTeamTags(tags)} // Pass teamTags handler
            />

            {/* Pass filter and teamTags to MatchList */}
            <MatchList filter={filter} teamTags={teamTags} />
        </div>
    );
};

export default HomePage;