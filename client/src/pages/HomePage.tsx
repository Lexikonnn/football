import React, { useState } from 'react';
import FilterBar from '../components/filterBar/FilterBar';
import MatchList from '../components/matchList/MatchList';

const HomePage: React.FC = () => {
    const [filter, setFilter] = useState<string>(''); // State for selected filter

    return (
        <div>
            <h1 className="text-2xl mb-4">HomePage</h1>
            <FilterBar onFilterChange={(status) => setFilter(status)} />
            <MatchList filter={filter} />
        </div>
    );
};

export default HomePage;