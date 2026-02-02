import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import DeliveryForm from './components/DeliveryForm';
import OrderSummary from './components/OrderSummary';
import PaymentMethod from './components/PaymentMethod';
import { cartItems } from '../../mocks/cartItems';

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order placed successfully! (Demo only)');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-teal-600 text-white rounded-full text-sm font-semibold">
                  1
                </div>
                <span className="text-sm font-medium text-gray-900">Delivery</span>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-teal-600 text-white rounded-full text-sm font-semibold">
                  2
                </div>
                <span className="text-sm font-medium text-gray-900">Payment</span>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full text-sm font-semibold">
                  3
                </div>
                <span className="text-sm font-medium text-gray-500">Confirmation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Address */}
              <DeliveryForm />

              {/* Payment Method */}
              <PaymentMethod
                selectedPayment={selectedPayment}
                onPaymentChange={setSelectedPayment}
              />

              {/* Additional Notes */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Order Notes (Optional)
                </h2>
                <textarea
                  placeholder="Add any special instructions for your order..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <OrderSummary
                  items={cartItems}
                  subtotal={subtotal}
                  shipping={shipping}
                  tax={tax}
                  total={total}
                />

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className={`w-full mt-6 py-4 rounded-lg font-semibold text-white whitespace-nowrap cursor-pointer transition-all ${
                    isProcessing
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700'
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line animate-spin"></i>
                      Processing...
                    </span>
                  ) : (
                    'Place Order'
                  )}
                </button>

                {/* Security Notice */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-lock-line text-base"></i>
                  </div>
                  <span>Secure checkout powered by SSL encryption</span>
                </div>

                {/* Return Policy */}
                <div className="mt-6 bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-shield-check-line text-lg text-teal-600"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teal-900">
                        30-Day Return Policy
                      </p>
                      <p className="text-xs text-teal-700 mt-1">
                        Not satisfied? Return within 30 days for a full refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}