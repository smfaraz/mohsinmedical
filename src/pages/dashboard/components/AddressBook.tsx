import { useState } from 'react';
import { userAddresses } from '../../../mocks/userProfile';

const AddressBook = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Address Book</h2>
            <p className="text-sm text-gray-600 mt-1">Manage your delivery addresses</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <i className="ri-add-line"></i>
            Add Address
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <h3 className="text-base font-semibold text-gray-900 mb-4">New Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="md:col-span-2 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Address Line 2 (Optional)"
              className="md:col-span-2 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="City"
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="State"
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Country"
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <select className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option>Home</option>
              <option>Work</option>
              <option>Other</option>
            </select>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="setDefault"
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="setDefault" className="ml-2 text-sm text-gray-700">
                Set as default address
              </label>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors whitespace-nowrap">
              Save Address
            </button>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userAddresses.map((address) => (
            <div
              key={address.id}
              className={`relative p-5 border-2 rounded-lg transition-all ${
                address.isDefault
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {address.isDefault && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full whitespace-nowrap">
                    Default
                  </span>
                </div>
              )}

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-map-pin-line text-lg text-gray-700"></i>
                  <span className="text-xs font-semibold text-gray-700 uppercase">{address.type}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">{address.fullName}</h3>
                <p className="text-sm text-gray-600">{address.phone}</p>
              </div>

              <div className="text-sm text-gray-700 mb-4">
                <p>{address.addressLine1}</p>
                {address.addressLine2 && <p>{address.addressLine2}</p>}
                <p>
                  {address.city}, {address.state} {address.zipCode}
                </p>
                <p>{address.country}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setEditingId(editingId === address.id ? null : address.id)}
                  className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
                >
                  <i className="ri-edit-line mr-1"></i>
                  Edit
                </button>
                <button className="flex-1 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors whitespace-nowrap">
                  <i className="ri-delete-bin-line mr-1"></i>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
