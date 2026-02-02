import { useNavigate } from "react-router-dom";

interface NoResultsProps {
  searchQuery: string;
  suggestions?: string[];
}

export default function NoResults({ searchQuery, suggestions = [] }: NoResultsProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full mb-6">
        <i className="ri-search-line text-6xl text-gray-400"></i>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        No Results Found
      </h2>
      <p className="text-base text-gray-600 mb-6 text-center max-w-md">
        We couldn't find any products matching "{searchQuery}". Try adjusting your search or browse our categories.
      </p>
      
      {suggestions.length > 0 && (
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-700 mb-3 text-center">
            Try searching for:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => navigate(`/search?q=${encodeURIComponent(suggestion)}`)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-teal-50 hover:text-teal-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium cursor-pointer whitespace-nowrap"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate("/category")}
          className="px-6 py-3 bg-white text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors font-medium cursor-pointer whitespace-nowrap"
        >
          Browse Categories
        </button>
      </div>
    </div>
  );
}
