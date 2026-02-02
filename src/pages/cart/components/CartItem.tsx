import { useState } from 'react';

interface CartItemProps {
  item: {
    id: string;
    image: string;
    title: string;
    price: number;
    quantity: number;
    maxStock: number;
  };
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  item,
  onQuantityChange,
  onRemove
}: CartItemProps) {
  const [currentQuantity, setCurrentQuantity] = useState(item.quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    setCurrentQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <div className="flex gap-4 py-6 border-b border-gray-200">
      <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-1">{item.title}</h3>
          <p className="text-lg font-semibold text-gray-900">${item.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-600">
              Qty:
            </label>
            <select
              id={`quantity-${item.id}`}
              value={currentQuantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              {Array.from({ length: Math.min(item.maxStock, 10) }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => onRemove(item.id)}
            className="text-sm text-red-600 hover:text-red-700 font-medium whitespace-nowrap cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold text-gray-900">
          ${(item.price * currentQuantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}