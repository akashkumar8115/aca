export const highlightMatch = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) =>
        regex.test(part) ?
            <mark key={i} className="bg-yellow-200">{part}</mark> :
            part
    );
};

export const sortByRelevance = (results) => {
    return [...results].sort((a, b) => a.score - b.score);
};

/**
 * Filter search results based on the given filters.
 *
 * @param {Array} results - The search results to filter.
 * @param {Object} filters - The filters to apply to the results.
 * @param {Array<string>} filters.types - The types of results to include.
 * @param {number} filters.minRelevance - The minimum relevance score to
 *   include in the results.
 * @returns {Array} The filtered results.
 */
export const filterResults = (results, filters) => {
    return results.filter(result => {
        const relevanceScore = (1 - result.score) * 100;
        return (
            filters.types.includes(result.item.type) &&
            relevanceScore >= filters.minRelevance
        );
    });
};
