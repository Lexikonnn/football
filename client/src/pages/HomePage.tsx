import React, { useEffect, useState } from 'react';
import MatchCard from '../components/matchCard/MatchCard';
import FilterBar from '../components/filterBar/FilterBar';
import { getMatches } from '../services/matchServices';
import { Match } from '../types/match.types';

const HomePage: React.FC = () => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [filter, setFilter] = useState<string>(''); // Stav pro vybraný filtr
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const data = await getMatches();
                setMatches(data);
            } catch {
                setError('Failed to load matches. Please try again later.');
            }
        };

        fetchMatches();
    }, []);

    // Filtrování zápasů na základě statusu
    const filteredMatches = matches.filter((match) =>
        filter === '' ? true : match.status === filter
    );

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div>
            <h1 className="text-2xl mb-4">HomePage</h1>
            <FilterBar onFilterChange={(status) => setFilter(status)} />
            <div className="flex flex-col gap-4">
                {filteredMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;