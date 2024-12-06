import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { searchableContent } from '../data/searchableContent';

const useSearch = (query, filters) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) return;

        setLoading(true);

        // Combine all content based on selected filters
        const content = Object.entries(searchableContent)
            .filter(([key]) => filters.types.includes(key))
            .flatMap(([_, items]) => items);

        const fuse = new Fuse(content, {
            keys: ['title', 'description', 'tags'],
            threshold: 0.3,
            includeScore: true
        });

        const searchResults = fuse.search(query)
            .filter(result => (1 - result.score) * 100 >= filters.minRelevance);

        setResults(searchResults);
        setLoading(false);
    }, [query, filters]);

    return { results, loading };
};

export default useSearch;
