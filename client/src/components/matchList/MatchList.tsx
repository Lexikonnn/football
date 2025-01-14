import React, { useEffect, useState } from 'react';
import { Match } from '../../types/match.types';
import { getMatches } from '../../services/matchServices';
import MatchCard from '../matchCard/MatchCard';

interface MatchListProps {
    filter: string; // Status filter
    teamTags: string[]; // Array of team tags
}

const MatchList: React.FC<MatchListProps> = ({ filter, teamTags }) => {
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

    // Filter matches based on filter and teamTags
    const filteredMatches = matches.filter((match) => {
        const statusMatch = filter === '' || match.status === filter;
        const teamMatch =
            teamTags.length === 0 ||
            teamTags.some((tag) =>
                tag.toLowerCase() === match.teamA.toLowerCase() || tag.toLowerCase() === match.teamB.toLowerCase()
            ); // Case-insensitive comparison
        return statusMatch && teamMatch;
    });

    return (
        <div className="flex flex-col gap-4">
            {filteredMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
            ))}
        </div>
    );
};

export default MatchList;