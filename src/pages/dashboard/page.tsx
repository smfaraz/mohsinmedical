import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ProfileSection from './components/ProfileSection';
import OrderHistory from './components/OrderHistory';
import WishlistSection from './components/WishlistSection';
import AddressBook from './components/AddressBook';
import { getUserProfile, getOrders, getWishlist, getAddresses } from '../../services/api';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [profileData, ordersData, wishlistData, addressesData] = await Promise.all([
          getUserProfile(),
          getOrders(),
          getWishlist(),
          getAddresses()
        ]);
        
        setProfile(profileData);
        setOrders(ordersData as any[]);
        setWishlist(wishlistData as any[]);
        setAddresses(addressesData as any[]);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: 'ri-user-line' },
    { id: 'orders', label: 'Orders', icon: 'ri-shopping-bag-line' },
    { id: 'wishlist', label: 'Wishlist', icon: 'ri-heart-line' },
    { id: 'addresses', label: 'Addresses', icon: 'ri-map-pin-line' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-20">
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">
                    {profile?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{profile?.name || 'User'}</h3>
                  <p className="text-sm text-gray-600">{profile?.email || ''}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-teal-50 text-teal-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <i className={`${tab.icon} text-xl`}></i>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && <ProfileSection profile={profile} />}
            {activeTab === 'orders' && <OrderHistory orders={orders} />}
            {activeTab === 'wishlist' && <WishlistSection wishlist={wishlist} />}
            {activeTab === 'addresses' && <AddressBook addresses={addresses} />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
