import { adminStats } from '../../../mocks/adminData';

const DashboardView = () => {
  const stats = [
    {
      label: 'Total Orders',
      value: adminStats.totalOrders.toLocaleString(),
      icon: 'ri-shopping-cart-line',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      change: '+12.5%',
      changeType: 'increase'
    },
    {
      label: 'Total Users',
      value: adminStats.totalUsers.toLocaleString(),
      icon: 'ri-user-line',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      change: '+8.2%',
      changeType: 'increase'
    },
    {
      label: 'Total Products',
      value: adminStats.totalProducts.toLocaleString(),
      icon: 'ri-box-line',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600',
      change: '+3.1%',
      changeType: 'increase'
    },
    {
      label: 'Total Revenue',
      value: `$${adminStats.totalRevenue.toLocaleString()}`,
      icon: 'ri-money-dollar-circle-line',
      bgColor: 'bg-teal-100',
      iconColor: 'text-teal-600',
      change: '+15.3%',
      changeType: 'increase'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm text-gray-600 mt-1">Welcome back! Here's what's happening with your store today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 flex items-center justify-center ${stat.bgColor} rounded-lg`}>
                <i className={`${stat.icon} text-xl ${stat.iconColor}`}></i>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                stat.changeType === 'increase' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { icon: 'ri-shopping-bag-line', text: 'New order #ORD-2024-1247 received', time: '5 minutes ago', color: 'text-blue-600' },
              { icon: 'ri-user-add-line', text: 'New user registration: Sarah Johnson', time: '12 minutes ago', color: 'text-green-600' },
              { icon: 'ri-box-line', text: 'Product "Wireless Mouse" stock updated', time: '1 hour ago', color: 'text-amber-600' },
              { icon: 'ri-truck-line', text: 'Order #ORD-2024-1246 shipped', time: '2 hours ago', color: 'text-teal-600' },
              { icon: 'ri-star-line', text: 'New review received for "Smart Watch"', time: '3 hours ago', color: 'text-rose-600' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className={`w-8 h-8 flex items-center justify-center ${activity.color} bg-gray-50 rounded-lg flex-shrink-0`}>
                  <i className={`${activity.icon} text-sm`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h2>
          <div className="space-y-4">
            {[
              { label: 'Pending Orders', value: '23', icon: 'ri-time-line', color: 'text-amber-600' },
              { label: 'Low Stock Products', value: '8', icon: 'ri-alert-line', color: 'text-red-600' },
              { label: 'Active Users Today', value: '342', icon: 'ri-user-line', color: 'text-green-600' },
              { label: 'Avg. Order Value', value: '$156.80', icon: 'ri-money-dollar-circle-line', color: 'text-teal-600' },
              { label: 'Customer Reviews', value: '1,247', icon: 'ri-star-line', color: 'text-amber-600' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 flex items-center justify-center ${item.color} bg-gray-50 rounded-lg`}>
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
                <span className="text-base font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
