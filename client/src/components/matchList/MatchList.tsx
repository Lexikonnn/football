import React, { useEffect, useState } from 'react';
import { Match } from '../../types/match.types';
import { getMatches } from '../../services/matchServices';
import MatchCard from '../matchCard/MatchCard';

interface MatchListProps {
    filter: string;
}

const MatchList: React.FC<MatchListProps> = ({ filter }) => {
    const [error, setError] = useState<string | null>(null);
    const [matches, setMatches] = useState<Match[]>([]);

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

    if (error) {
        return <p className="error">{error}</p>;
    }

    // Filter matches based on the filter prop
    const filteredMatches = matches.filter((match) =>
        filter === '' ? true : match.status === filter
    );

    return (
        <div className="flex flex-col gap-4">
            {filteredMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
            ))}
        </div>
    );
};

export default MatchList;