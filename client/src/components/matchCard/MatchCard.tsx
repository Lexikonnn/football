import { Match } from '../../types/match.types';
import Btn from '../button/Btn';

type MatchCardProps = {
    match: Match;
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
    return (
        <div className="inline-flex flex-row p-4 bg-white shadow-sm rounded w-full h-fit items-center">
            <div className="flex flex-row gap-4 w-full">
                <div className="bg-slate-300 w-32 h-32" />
                <div className="flex flex-col gap-1 flex-grow">
                    <h1 className="text-2xl font-bold">{match.teamA} vs {match.teamB}</h1>
                    <h2 className="text-xl">{match.status}</h2>
                    <p className="text-base">{match.date}</p>
                </div>
                <div className='self-end'>
                    <Btn button={{ content: "favourite" }} />
                </div>
            </div>
        </div>
    );
}

export default MatchCard;