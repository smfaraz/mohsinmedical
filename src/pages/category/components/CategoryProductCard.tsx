interface CategoryProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    brand: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    discount: number;
  };
}

export default function CategoryProductCard({ product }: CategoryProductCardProps) {
  return (
    <a href={`/product/${product.id}`} className="group cursor-pointer">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
        <div className="relative w-full h-56 bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
          {product.discount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold whitespace-nowrap">
              -{product.discount}%
            </div>
          )}
          {product.badge && (
            <div className="absolute top-3 left-3 bg-teal-600 text-white px-2 py-1 rounded-md text-xs font-semibold whitespace-nowrap">
              {product.badge}
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
          <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`${
                  index < Math.floor(product.rating)
                    ? 'ri-star-fill text-yellow-400'
                    : 'ri-star-line text-gray-300'
                } text-sm`}
              ></i>
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            <button className="w-8 h-8 flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors cursor-pointer">
              <i className="ri-shopping-cart-line text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}