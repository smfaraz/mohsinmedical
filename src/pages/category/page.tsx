import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import FilterSidebar from './components/FilterSidebar';
import SortingBar from './components/SortingBar';
import ProductGrid from './components/ProductGrid';
import { getProductsByCategory } from '../../services/api';

export default function CategoryPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    brands: [] as string[],
    ratings: 0,
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProductsByCategory('electronics') as any[];
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-20">
            <p className="text-gray-600">Loading products...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-teal-600 cursor-pointer">Home</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-gray-900 font-medium">Electronics</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <SortingBar totalProducts={products.length} />
            <ProductGrid products={products} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
