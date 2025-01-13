import { Match } from '../../types/match.types';
import Btn from '../button/Btn';

type MatchCardProps = {
    match: Match;
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
    return (
        <div className="flex flex-col sm:flex-row p-4 bg-white shadow-sm rounded w-full h-fit gap-4">
            <div className="bg-slate-300 w-full sm:w-32 h-32 flex-shrink-0" />
            <div className="flex flex-col gap-2 text-center sm:text-left flex-grow">
                <h1 className="text-lg sm:text-2xl font-bold">{match.teamA} vs {match.teamB}</h1>
                <h2 className="text-sm sm:text-xl">{match.status}</h2>
                <p className="text-xs sm:text-base">{new Date(match.date).toLocaleDateString()}</p>
            </div>
            <div className="self-center sm:self-end">
                <Btn button={{ content: "favourite" }} />
            </div>
        </div>
    );
};

export default MatchCard;