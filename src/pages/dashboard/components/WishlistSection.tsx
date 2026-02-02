import { useState } from 'react';
import { wishlistItems } from '../../../mocks/userProfile';

const WishlistSection = () => {
  const [items, setItems] = useState(wishlistItems);

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">My Wishlist</h2>
            <p className="text-sm text-gray-600 mt-1">{items.length} {items.length === 1 ? 'item' : 'items'} saved</p>
          </div>
          {items.length > 0 && (
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
              <i className="ri-share-line mr-1"></i>
              Share Wishlist
            </button>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <div className="p-12 text-center">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
            <i className="ri-heart-line text-3xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-sm text-gray-600 mb-6">Save items you love to buy them later</p>
          <button className="px-6 py-3 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors whitespace-nowrap">
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop>
            {items.map((item) => (
              <div key={item.id} className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                >
                  <i className="ri-close-line text-lg text-gray-700 hover:text-red-600"></i>
                </button>

                {!item.inStock && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-full whitespace-nowrap">
                      Out of Stock
                    </span>
                  </div>
                )}

                <div className="w-full h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">{item.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <i className="ri-star-fill text-sm text-amber-400"></i>
                      <span className="text-xs font-medium text-gray-700">{item.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({item.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
                    {item.originalPrice && (
                      <>
                        <span className="text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                        <span className="text-xs font-medium text-red-600">
                          {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      disabled={!item.inStock}
                      className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                        item.inStock
                          ? 'text-white bg-teal-600 hover:bg-teal-700'
                          : 'text-gray-400 bg-gray-100 cursor-not-allowed'
                      }`}
                    >
                      <i className="ri-shopping-cart-line mr-1"></i>
                      {item.inStock ? 'Add to Cart' : 'Unavailable'}
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                      <i className="ri-eye-line text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistSection;
