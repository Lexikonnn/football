/**
 * Adds a new team tag to the array, ensuring uniqueness (case-insensitive).
 * @param teamTags - Current list of team tags.
 * @param teamName - New team name to add.
 * @returns Updated array of team tags.
 */

export const addTeamTag = (teamTags: string[], teamName: string): string[] => {
    const normalizedTeamName = teamName.trim().toLowerCase();

    if (!normalizedTeamName || teamTags.some(tag => tag.toLowerCase() === normalizedTeamName)) {
        return teamTags; // Avoid duplicates
    }

    return [...teamTags, teamName]; // Keep original capitalization
};

/**
 * Removes a team tag from the array.
 * @param teamTags - Current list of team tags.
 * @param tagToRemove - The team tag to remove.
 * @returns Updated array of team tags.
 */

export const removeTeamTag = (teamTags: string[], tagToRemove: string): string[] => {
    return teamTags.filter(tag => tag !== tagToRemove);
};