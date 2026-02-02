import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SearchBar from './components/SearchBar';
import SearchFilters from './components/SearchFilters';
import SearchResultsGrid from './components/SearchResultsGrid';
import NoResults from './components/NoResults';
import { searchProducts } from '../../services/api';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    rating: 0,
  });

  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const data = await searchProducts(searchQuery, filters) as any[];
        setResults(data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />

        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-600">Searching...</p>
          </div>
        ) : (
          <>
            {searchQuery && (
              <div className="mb-6">
                <p className="text-gray-600">
                  {results.length} results found for <strong>"{searchQuery}"</strong>
                </p>
              </div>
            )}

            {results.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <aside className="lg:col-span-1">
                  <SearchFilters filters={filters} onFilterChange={handleFilterChange} />
                </aside>
                <div className="lg:col-span-3">
                  <SearchResultsGrid results={results} />
                </div>
              </div>
            ) : searchQuery ? (
              <NoResults query={searchQuery} />
            ) : (
              <div className="text-center py-20">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <p className="text-gray-600">Start typing to search for products</p>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
