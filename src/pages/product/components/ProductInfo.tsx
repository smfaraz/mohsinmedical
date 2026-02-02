import { useState } from 'react';

interface ProductInfoProps {
  product: {
    name: string;
    sku: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    inStock: boolean;
    stockCount: number;
    rating: number;
    reviewCount: number;
    category: string;
    brand: string;
    badges: string[];
    shortDescription: string;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleAddToWishlist = () => {
    setAddedToWishlist(!addedToWishlist);
  };

  return (
    <div className="space-y-6">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {product.badges.map((badge, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full whitespace-nowrap"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Product Name */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Brand: <strong className="text-gray-900">{product.brand}</strong></span>
          <span>SKU: {product.sku}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`${
                index < Math.floor(product.rating)
                  ? 'ri-star-fill text-yellow-400'
                  : 'ri-star-line text-gray-300'
              } text-lg`}
            ></i>
          ))}
        </div>
        <span className="text-sm font-medium text-gray-900">{product.rating}</span>
        <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline space-x-3">
        <span className="text-4xl font-bold text-gray-900">${product.price}</span>
        {product.originalPrice && (
          <>
            <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
            <span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded whitespace-nowrap">
              Save {product.discount}%
            </span>
          </>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        {product.inStock ? (
          <>
            <i className="ri-checkbox-circle-fill text-green-600 text-xl"></i>
            <span className="text-green-600 font-medium">In Stock</span>
            <span className="text-gray-500 text-sm">({product.stockCount} available)</span>
          </>
        ) : (
          <>
            <i className="ri-close-circle-fill text-red-600 text-xl"></i>
            <span className="text-red-600 font-medium">Out of Stock</span>
          </>
        )}
      </div>

      {/* Short Description */}
      <p className="text-gray-700 leading-relaxed">{product.shortDescription}</p>

      <div className="border-t border-gray-200 pt-6 space-y-4">
        {/* Quantity Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <i className="ri-subtract-line text-lg"></i>
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 h-10 text-center border border-gray-300 rounded-lg font-medium text-sm"
            />
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= product.stockCount}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <i className="ri-add-line text-lg"></i>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2"
          >
            <i className={`${addedToCart ? 'ri-check-line' : 'ri-shopping-cart-line'} text-xl`}></i>
            <span>{addedToCart ? 'Added to Cart' : 'Add to Cart'}</span>
          </button>
          <button
            onClick={handleAddToWishlist}
            className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
              addedToWishlist
                ? 'border-red-500 bg-red-50 text-red-600'
                : 'border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600'
            }`}
          >
            <i className={`${addedToWishlist ? 'ri-heart-fill' : 'ri-heart-line'} text-xl`}></i>
          </button>
        </div>

        {/* Additional Info */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <i className="ri-truck-line text-teal-600 text-xl"></i>
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <i className="ri-arrow-go-back-line text-teal-600 text-xl"></i>
            <span>30-day return policy</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <i className="ri-shield-check-line text-teal-600 text-xl"></i>
            <span>2-year warranty included</span>
          </div>
        </div>
      </div>
    </div>
  );
}