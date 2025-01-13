export type Match = {
    id: number;
    teamA: string;
    teamB: string;
    date: string;
    status: 'future' | 'past' | 'ongoing';
  };