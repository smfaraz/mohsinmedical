import { useState } from 'react';
import { userOrders } from '../../../mocks/userProfile';

const OrderHistory = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'In Transit':
        return 'bg-blue-100 text-blue-700';
      case 'Processing':
        return 'bg-amber-100 text-amber-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'ri-checkbox-circle-line';
      case 'In Transit':
        return 'ri-truck-line';
      case 'Processing':
        return 'ri-time-line';
      case 'Cancelled':
        return 'ri-close-circle-line';
      default:
        return 'ri-information-line';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Order History</h2>
        <p className="text-sm text-gray-600 mt-1">View and track your orders</p>
      </div>

      <div className="divide-y divide-gray-200">
        {userOrders.map((order) => (
          <div key={order.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-gray-900">{order.id}</h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${getStatusColor(order.status)}`}>
                    <i className={`${getStatusIcon(order.status)} mr-1`}></i>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Placed on {new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                {order.trackingNumber && (
                  <p className="text-xs text-gray-500 mt-1">
                    Tracking: <span className="font-medium">{order.trackingNumber}</span>
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</p>
                <p className="text-xs text-gray-600">{order.items} {order.items === 1 ? 'item' : 'items'}</p>
              </div>
            </div>

            {selectedOrder === order.id && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Order Items</h4>
                <div className="space-y-3">
                  {order.products.map((product) => (
                    <div key={product.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                        <p className="text-xs text-gray-600">Qty: {product.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
              >
                {selectedOrder === order.id ? 'Hide Details' : 'View Details'}
              </button>
              {order.status === 'In Transit' && (
                <button className="px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap">
                  <i className="ri-map-pin-line mr-1"></i>
                  Track Order
                </button>
              )}
              {order.status === 'Delivered' && (
                <button className="px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap">
                  <i className="ri-repeat-line mr-1"></i>
                  Buy Again
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
