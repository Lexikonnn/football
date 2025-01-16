import { Match } from '../types/match.types';

/**
 * Načítá mock data ze souboru mockdata.json ve složce public.
 * @returns {Promise<Match[]>} Pole zápasů
 */

export const getMatches = async (): Promise<Match[]> => {
  try {
    const response = await fetch('/mockdata.json'); // Relativní cesta k souboru
    if (!response.ok) {
      throw new Error(`Failed to fetch matches: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};