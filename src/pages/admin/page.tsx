import { useState, useEffect } from 'react';
import AdminNavbar from './components/AdminNavbar';
import DashboardView from './components/DashboardView';
import OrdersView from './components/OrdersView';
import ProductsView from './components/ProductsView';
import { getAdminDashboard, getAdminOrders, getAdminProducts } from '../../services/api';

export default function AdminPage() {
  const [activeView, setActiveView] = useState('dashboard');
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [dashboard, ordersData, productsData] = await Promise.all([
          getAdminDashboard(),
          getAdminOrders(),
          getAdminProducts()
        ]);
        
        setDashboardData(dashboard);
        setOrders(ordersData as any[]);
        setProducts(productsData as any[]);
      } catch (error) {
        console.error('Failed to load admin data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminNavbar activeView={activeView} onViewChange={setActiveView} />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-20">
            <p className="text-gray-600">Loading admin panel...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar activeView={activeView} onViewChange={setActiveView} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeView === 'dashboard' && <DashboardView data={dashboardData} />}
        {activeView === 'orders' && <OrdersView orders={orders} />}
        {activeView === 'products' && <ProductsView products={products} />}
      </main>
    </div>
  );
}
