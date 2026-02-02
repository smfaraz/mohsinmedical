import { useState } from 'react';

interface CouponFormProps {
  onApplyCoupon: (code: string) => void;
}

export default function CouponForm({ onApplyCoupon }: CouponFormProps) {
  const [couponCode, setCouponCode] = useState('');
  const [isApplied, setIsApplied] = useState(false);
  const [message, setMessage] = useState('');

  const handleApply = () => {
    if (!couponCode.trim()) {
      setMessage('Please enter a coupon code');
      return;
    }

    // Simulate coupon validation
    if (couponCode.toUpperCase() === 'SAVE10') {
      setIsApplied(true);
      setMessage('Coupon applied successfully!');
      onApplyCoupon(couponCode);
    } else {
      setMessage('Invalid coupon code');
      setIsApplied(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Have a Coupon?</h3>
      
      <div className="flex gap-3">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          disabled={isApplied}
        />
        <button
          onClick={handleApply}
          disabled={isApplied}
          className={`px-6 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap cursor-pointer transition-colors ${
            isApplied
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          {isApplied ? 'Applied' : 'Apply'}
        </button>
      </div>

      {message && (
        <p className={`mt-3 text-sm ${isApplied ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}