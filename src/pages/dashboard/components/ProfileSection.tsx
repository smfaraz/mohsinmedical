import { useState } from 'react';
import { userProfile } from '../../../mocks/userProfile';

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap"
            >
              <i className="ri-edit-line"></i>
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors whitespace-nowrap"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
                <i className="ri-camera-line text-sm"></i>
              </button>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{userProfile.name}</h3>
            <p className="text-sm text-gray-600">Member since {new Date(userProfile.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            ) : (
              <p className="text-sm text-gray-900">{formData.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            ) : (
              <p className="text-sm text-gray-900">{formData.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            ) : (
              <p className="text-sm text-gray-900">{formData.phone}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg">
              <i className="ri-shopping-bag-line text-lg text-teal-600"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{userProfile.totalOrders}</p>
              <p className="text-xs text-gray-600">Total Orders</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-lg">
              <i className="ri-money-dollar-circle-line text-lg text-amber-600"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">${userProfile.totalSpent.toFixed(2)}</p>
              <p className="text-xs text-gray-600">Total Spent</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center bg-rose-100 rounded-lg">
              <i className="ri-heart-line text-lg text-rose-600"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">6</p>
              <p className="text-xs text-gray-600">Wishlist Items</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <i className="ri-lock-password-line text-lg"></i>
              <span>Change Password</span>
            </div>
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <i className="ri-shield-check-line text-lg"></i>
              <span>Two-Factor Authentication</span>
            </div>
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
