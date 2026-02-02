import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ImageGallery from './components/ImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import RelatedProducts from './components/RelatedProducts';
import { getProductById } from '../../services/api';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id || '1');
        setProduct(data);
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-20">
            <p className="text-gray-600">Loading product...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-20">
            <p className="text-gray-600">Product not found</p>
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
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-teal-600 cursor-pointer">Home</a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="/category" className="hover:text-teal-600 cursor-pointer">{product.category}</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ImageGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Product Tabs */}
        <div className="mb-12">
          <ProductTabs
            description={product.description}
            specifications={product.specifications}
            features={product.features}
            reviews={product.reviews}
          />
        </div>

        {/* Related Products */}
        <RelatedProducts products={product.relatedProducts} />
      </main>

      <Footer />
    </div>
  );
}
