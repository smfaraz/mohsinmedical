interface PaymentMethodProps {
  selectedPayment: string;
  onPaymentChange: (method: string) => void;
}

export default function PaymentMethod({ selectedPayment, onPaymentChange }: PaymentMethodProps) {
  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit / Debit Card',
      icon: 'ri-bank-card-line',
      description: 'Pay securely with your card',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: 'ri-paypal-line',
      description: 'Fast and secure PayPal checkout',
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: 'ri-money-dollar-circle-line',
      description: 'Pay when you receive your order',
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Method</h2>

      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => onPaymentChange(method.id)}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedPayment === method.id
                ? 'border-teal-600 bg-teal-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="payment"
                checked={selectedPayment === method.id}
                onChange={() => onPaymentChange(method.id)}
                className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500 cursor-pointer"
              />
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg border border-gray-200">
                <i className={`${method.icon} text-2xl text-gray-700`}></i>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{method.name}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </div>

            {/* Card Details Form (shown only when card is selected) */}
            {selectedPayment === 'card' && method.id === 'card' && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                      <div className="w-8 h-5 flex items-center justify-center">
                        <i className="ri-visa-line text-2xl text-blue-600"></i>
                      </div>
                      <div className="w-8 h-5 flex items-center justify-center">
                        <i className="ri-mastercard-line text-2xl text-orange-600"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      maxLength={3}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="saveCard"
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                  />
                  <label htmlFor="saveCard" className="text-sm text-gray-700 cursor-pointer">
                    Save card for future purchases
                  </label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Security Badges */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-shield-check-line text-xl text-green-600"></i>
            </div>
            <span className="text-sm text-gray-600">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-lock-line text-xl text-green-600"></i>
            </div>
            <span className="text-sm text-gray-600">PCI Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-verified-badge-line text-xl text-green-600"></i>
            </div>
            <span className="text-sm text-gray-600">Verified Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}