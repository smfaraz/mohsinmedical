interface AdminNavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const AdminNavbar = ({ activeView, setActiveView }: AdminNavbarProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-line' },
    { id: 'products', label: 'Products', icon: 'ri-shopping-bag-line' },
    { id: 'orders', label: 'Orders', icon: 'ri-file-list-line' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-teal-600 rounded-lg">
                <i className="ri-admin-line text-white text-lg"></i>
              </div>
              <span className="text-lg font-bold text-gray-900">Admin Panel</span>
            </div>

            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeView === item.id
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="ri-notification-line text-lg"></i>
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="ri-settings-line text-lg"></i>
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20business%20person%20avatar%20portrait%20on%20neutral%20background&width=36&height=36&seq=adminav1&orientation=squarish"
                alt="Admin"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
