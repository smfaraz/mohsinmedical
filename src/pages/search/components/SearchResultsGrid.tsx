import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
  discount?: number;
}

interface SearchResultsGridProps {
  products: Product[];
}

export default function SearchResultsGrid({ products }: SearchResultsGridProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
          onClick={() => navigate(`/product/${product.id}`)}
          data-product-shop
        >
          <div className="relative w-full h-72 bg-gray-50">
            {product.discount && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold z-10">
                -{product.discount}%
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <div className="text-xs text-teal-600 font-medium mb-2">
              {product.category}
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <i className="ri-star-fill text-yellow-400 text-sm"></i>
                <span className="text-sm font-medium text-gray-900">
                  {product.rating}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews})
              </span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-medium ${
                  product.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
