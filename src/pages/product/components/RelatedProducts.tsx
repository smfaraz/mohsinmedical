interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
}

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <a
            key={product.id}
            href={`/product/${product.id}`}
            className="group cursor-pointer"
          >
            <div className="bg-gray-50 rounded-lg overflow-hidden mb-3 group-hover:shadow-lg transition-shadow">
              <div className="w-full h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
              
              <div className="flex items-center space-x-1">
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
                <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
              </div>
              
              <div className="flex items-baseline space-x-2">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}