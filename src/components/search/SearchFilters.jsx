import React from 'react';

const SearchFilters = ({ filters, setFilters }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="font-semibold mb-4">Filter Results</h3>
      
      <div className="space-y-4">
        {/* Content Type Filter */}
        <div>
          <h4 className="text-sm font-medium mb-2">Content Type</h4>
          <div className="space-y-2">
            {['courses', 'resources', 'services'].map(type => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.types.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters(prev => ({
                        ...prev,
                        types: [...prev.types, type]
                      }));
                    } else {
                      setFilters(prev => ({
                        ...prev,
                        types: prev.types.filter(t => t !== type)
                      }));
                    }
                  }}
                  className="rounded text-violet-600 focus:ring-violet-500"
                />
                <span className="capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Relevance Filter */}
        <div>
          <h4 className="text-sm font-medium mb-2">Minimum Relevance</h4>
          <input
            type="range"
            min="0"
            max="100"
            value={filters.minRelevance}
            onChange={(e) => setFilters(prev => ({
              ...prev,
              minRelevance: parseInt(e.target.value)
            }))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{filters.minRelevance}%</span>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
