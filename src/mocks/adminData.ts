export const adminStats = {
  totalOrders: 1247,
  totalUsers: 3856,
  totalProducts: 342,
  totalRevenue: 125847.50
};

export const adminProducts = [
  {
    id: 'P001',
    name: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 89.99,
    stock: 145,
    status: 'In Stock',
    image: 'https://readdy.ai/api/search-image?query=modern%20wireless%20bluetooth%20headphones%20with%20sleek%20black%20design%20on%20clean%20white%20background%20professional%20product%20photography%20studio%20lighting&width=80&height=80&seq=adminprod1&orientation=squarish'
  },
  {
    id: 'P002',
    name: 'Smart Fitness Watch',
    category: 'Wearables',
    price: 199.99,
    stock: 89,
    status: 'In Stock',
    image: 'https://readdy.ai/api/search-image?query=premium%20smart%20fitness%20watch%20with%20black%20band%20and%20digital%20display%20on%20white%20background%20professional%20product%20photography%20studio%20lighting&width=80&height=80&seq=adminprod2&orientation=squarish'
  },
  {
    id: 'P003',
    name: 'Leather Laptop Bag',
    category: 'Accessories',
    price: 129.99,
    stock: 5,
    status: 'Low Stock',
    image: 'https://readdy.ai/api/search-image?query=elegant%20brown%20leather%20laptop%20bag%20professional%20business%20style%20on%20white%20background%20studio%20product%20photography&width=80&height=80&seq=adminprod3&orientation=squarish'
  },
  {
    id: 'P004',
    name: 'Portable Power Bank',
    category: 'Electronics',
    price: 45.99,
    stock: 0,
    status: 'Out of Stock',
    image: 'https://readdy.ai/api/search-image?query=compact%20portable%20power%20bank%20charger%20black%20color%20on%20clean%20white%20background%20professional%20product%20photography&width=80&height=80&seq=adminprod4&orientation=squarish'
  },
  {
    id: 'P005',
    name: 'Wireless Mouse',
    category: 'Electronics',
    price: 34.99,
    stock: 234,
    status: 'In Stock',
    image: 'https://readdy.ai/api/search-image?query=ergonomic%20wireless%20computer%20mouse%20modern%20design%20on%20white%20background%20professional%20product%20photography%20studio%20lighting&width=80&height=80&seq=adminprod5&orientation=squarish'
  },
  {
    id: 'P006',
    name: 'USB-C Hub Adapter',
    category: 'Accessories',
    price: 59.99,
    stock: 167,
    status: 'In Stock',
    image: 'https://readdy.ai/api/search-image?query=multi%20port%20usb%20c%20hub%20adapter%20silver%20aluminum%20on%20white%20background%20professional%20product%20photography&width=80&height=80&seq=adminprod6&orientation=squarish'
  },
  {
    id: 'P007',
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: 149.99,
    stock: 78,
    status: 'In Stock',
    image: 'https://readdy.ai/api/search-image?query=premium%20mechanical%20gaming%20keyboard%20with%20rgb%20lighting%20on%20white%20background%20professional%20product%20photography&width=80&height=80&seq=adminprod7&orientation=squarish'
  },
  {
    id: 'P008',
    name: 'Phone Stand Holder',
    category: 'Accessories',
    price: 24.99,
    stock: 312,
    status: 'In Stock',
    image: 'https://readdy.ai/api/search-image?query=adjustable%20phone%20stand%20holder%20aluminum%20design%20on%20white%20background%20professional%20product%20photography&width=80&height=80&seq=adminprod8&orientation=squarish'
  }
];

export const adminOrders = [
  {
    id: 'ORD-2024-1247',
    customer: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    date: '2024-01-15',
    total: 289.97,
    status: 'Delivered',
    items: 3
  },
  {
    id: 'ORD-2024-1246',
    customer: 'Michael Chen',
    email: 'michael.c@email.com',
    date: '2024-01-15',
    total: 149.99,
    status: 'In Transit',
    items: 1
  },
  {
    id: 'ORD-2024-1245',
    customer: 'Emma Wilson',
    email: 'emma.w@email.com',
    date: '2024-01-14',
    total: 459.95,
    status: 'Processing',
    items: 5
  },
  {
    id: 'ORD-2024-1244',
    customer: 'James Brown',
    email: 'james.b@email.com',
    date: '2024-01-14',
    total: 89.99,
    status: 'Delivered',
    items: 1
  },
  {
    id: 'ORD-2024-1243',
    customer: 'Olivia Martinez',
    email: 'olivia.m@email.com',
    date: '2024-01-13',
    total: 324.98,
    status: 'Cancelled',
    items: 4
  },
  {
    id: 'ORD-2024-1242',
    customer: 'David Lee',
    email: 'david.l@email.com',
    date: '2024-01-13',
    total: 199.99,
    status: 'Delivered',
    items: 2
  },
  {
    id: 'ORD-2024-1241',
    customer: 'Sophia Garcia',
    email: 'sophia.g@email.com',
    date: '2024-01-12',
    total: 674.95,
    status: 'In Transit',
    items: 7
  },
  {
    id: 'ORD-2024-1240',
    customer: 'William Taylor',
    email: 'william.t@email.com',
    date: '2024-01-12',
    total: 129.99,
    status: 'Processing',
    items: 1
  }
];

export const adminData = {
  dashboard: adminStats,
  orders: adminOrders,
  products: adminProducts
};
