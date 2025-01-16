import React, { useEffect, useState } from 'react';
import { Match } from '../../types/match.types';
import { getMatches } from '../../services/matchServices';
import MatchCard from '../matchCard/MatchCard';
import { isDateInRange } from '../../utils/dateComparisons';

interface MatchListProps {
    filter: string; // Status filter
    teamTags: string[]; // Team tags filter
    startDate?: Date | null; // Optional start date (can be null)
    endDate?: Date | null; // Optional end date (can be null)
}

const MatchList: React.FC<MatchListProps> = ({ filter, teamTags, startDate, endDate }) => {
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

    const filteredMatches = matches.filter((match) => {
        const statusMatch = filter === '' || match.status === filter;
        const teamMatch =
            teamTags.length === 0 ||
            teamTags.some((tag) =>
                tag.toLowerCase() === match.teamA.toLowerCase() || tag.toLowerCase() === match.teamB.toLowerCase()
            );
    
        const dateMatch = isDateInRange(match.date, startDate || undefined, endDate || undefined);
    
        return statusMatch && teamMatch && dateMatch;
    });

    return (
        <div className="flex flex-col gap-4">
            {filteredMatches.length > 0 ? (
                filteredMatches.map((match) => <MatchCard key={match.id} match={match} />)
            ) : (
                <p className="text-center text-gray-500">No matches found</p>
            )}
        </div>
    );
};

export default MatchList;