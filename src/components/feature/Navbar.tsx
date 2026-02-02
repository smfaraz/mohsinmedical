import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('US');

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center bg-teal-600 rounded-lg">
              <i className="ri-hospital-line text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold text-gray-900">MediStore</span>
          </a>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search medical supplies..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="/category" className="text-sm font-medium text-gray-700 hover:text-teal-600 cursor-pointer whitespace-nowrap">
              Products
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600 cursor-pointer whitespace-nowrap">
              About
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-teal-600 cursor-pointer whitespace-nowrap">
              Contact
            </a>
            <a href="/login" className="text-sm font-medium text-gray-700 hover:text-teal-600 cursor-pointer whitespace-nowrap">
              <i className="ri-user-line text-xl"></i>
            </a>
            <a href="/cart" className="relative cursor-pointer">
              <i className="ri-shopping-cart-line text-2xl text-gray-700 hover:text-teal-600"></i>
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                5
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}