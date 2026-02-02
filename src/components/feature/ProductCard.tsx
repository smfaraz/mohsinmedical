interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a href={`/product/${product.id}`} className="group cursor-pointer">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="relative w-full h-64 bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
          {product.originalPrice && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold whitespace-nowrap">
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
          <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}