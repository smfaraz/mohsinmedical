export const userProfile = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://readdy.ai/api/search-image?query=professional%20woman%20portrait%20with%20warm%20smile%20wearing%20casual%20business%20attire%20against%20soft%20neutral%20background%20studio%20lighting%20high%20quality%20photography&width=200&height=200&seq=user001&orientation=squarish',
  joinedDate: '2023-06-15',
  totalOrders: 24,
  totalSpent: 3456.78
};

export const userAddresses = [
  {
    id: '1',
    type: 'Home',
    isDefault: true,
    fullName: 'Sarah Johnson',
    phone: '+1 (555) 123-4567',
    addressLine1: '123 Maple Street',
    addressLine2: 'Apt 4B',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    country: 'United States'
  },
  {
    id: '2',
    type: 'Work',
    isDefault: false,
    fullName: 'Sarah Johnson',
    phone: '+1 (555) 987-6543',
    addressLine1: '456 Market Street',
    addressLine2: 'Suite 200',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    country: 'United States'
  },
  {
    id: '3',
    type: 'Other',
    isDefault: false,
    fullName: 'Sarah Johnson',
    phone: '+1 (555) 123-4567',
    addressLine1: '789 Ocean Avenue',
    addressLine2: '',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    country: 'United States'
  }
];

export const userOrders = [
  {
    id: 'ORD-2024-001',
    date: '2024-01-15',
    status: 'Delivered',
    total: 234.50,
    items: 3,
    trackingNumber: 'TRK123456789',
    products: [
      {
        id: '1',
        name: 'Premium Wireless Headphones',
        image: 'https://readdy.ai/api/search-image?query=modern%20premium%20wireless%20headphones%20black%20color%20with%20sleek%20design%20on%20white%20background%20product%20photography%20high%20quality&width=100&height=100&seq=order001&orientation=squarish',
        quantity: 1,
        price: 149.99
      },
      {
        id: '2',
        name: 'Smart Watch Series 5',
        image: 'https://readdy.ai/api/search-image?query=elegant%20smart%20watch%20with%20black%20band%20and%20digital%20display%20on%20white%20background%20product%20photography%20high%20quality&width=100&height=100&seq=order002&orientation=squarish',
        quantity: 1,
        price: 79.99
      }
    ]
  },
  {
    id: 'ORD-2024-002',
    date: '2024-01-10',
    status: 'In Transit',
    total: 456.00,
    items: 2,
    trackingNumber: 'TRK987654321',
    products: [
      {
        id: '3',
        name: 'Laptop Stand Aluminum',
        image: 'https://readdy.ai/api/search-image?query=modern%20aluminum%20laptop%20stand%20silver%20color%20minimalist%20design%20on%20white%20background%20product%20photography%20high%20quality&width=100&height=100&seq=order003&orientation=squarish',
        quantity: 2,
        price: 89.99
      }
    ]
  },
  {
    id: 'ORD-2024-003',
    date: '2024-01-05',
    status: 'Processing',
    total: 189.99,
    items: 1,
    trackingNumber: '',
    products: [
      {
        id: '4',
        name: 'Mechanical Keyboard RGB',
        image: 'https://readdy.ai/api/search-image?query=gaming%20mechanical%20keyboard%20with%20rgb%20lighting%20black%20color%20on%20white%20background%20product%20photography%20high%20quality&width=100&height=100&seq=order004&orientation=squarish',
        quantity: 1,
        price: 189.99
      }
    ]
  },
  {
    id: 'ORD-2023-045',
    date: '2023-12-28',
    status: 'Delivered',
    total: 567.80,
    items: 4,
    trackingNumber: 'TRK456789123',
    products: [
      {
        id: '5',
        name: 'Wireless Mouse Pro',
        image: 'https://readdy.ai/api/search-image?query=ergonomic%20wireless%20mouse%20black%20color%20modern%20design%20on%20white%20background%20product%20photography%20high%20quality&width=100&height=100&seq=order005&orientation=squarish',
        quantity: 2,
        price: 49.99
      },
      {
        id: '6',
        name: 'USB-C Hub 7-in-1',
        image: 'https://readdy.ai/api/search-image?query=compact%20usb-c%20hub%20adapter%20gray%20color%20with%20multiple%20ports%20on%20white%20background%20product%20photography%20high%20quality&width=100&height=100&seq=order006&orientation=squarish',
        quantity: 1,
        price: 79.99
      }
    ]
  },
  {
    id: 'ORD-2023-044',
    date: '2023-12-20',
    status: 'Cancelled',
    total: 299.99,
    items: 1,
    trackingNumber: '',
    products: [
      {
        id: '7',
        name: 'Portable Monitor 15.6"',
        image: 'https://readdy.ai/api/search-image?query=portable%20monitor%20screen%20black%20frame%20slim%20design%20on%20white%20background%20product%20photography%20high%20quality&width=100&height=100&seq=order007&orientation=squarish',
        quantity: 1,
        price: 299.99
      }
    ]
  }
];

export const wishlistItems = [
  {
    id: '1',
    name: 'Premium Noise Cancelling Headphones',
    price: 349.99,
    originalPrice: 449.99,
    image: 'https://readdy.ai/api/search-image?query=luxury%20noise%20cancelling%20headphones%20silver%20color%20premium%20design%20on%20white%20background%20product%20photography%20high%20quality&width=300&height=300&seq=wish001&orientation=squarish',
    inStock: true,
    rating: 4.8,
    reviews: 1234
  },
  {
    id: '2',
    name: '4K Webcam Pro',
    price: 199.99,
    originalPrice: null,
    image: 'https://readdy.ai/api/search-image?query=professional%204k%20webcam%20black%20color%20modern%20design%20on%20white%20background%20product%20photography%20high%20quality&width=300&height=300&seq=wish002&orientation=squarish',
    inStock: true,
    rating: 4.6,
    reviews: 856
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    price: 599.99,
    originalPrice: 799.99,
    image: 'https://readdy.ai/api/search-image?query=modern%20ergonomic%20office%20chair%20black%20mesh%20back%20adjustable%20design%20on%20white%20background%20product%20photography%20high%20quality&width=300&height=300&seq=wish003&orientation=squarish',
    inStock: false,
    rating: 4.9,
    reviews: 2341
  },
  {
    id: '4',
    name: 'Wireless Charging Station',
    price: 89.99,
    originalPrice: null,
    image: 'https://readdy.ai/api/search-image?query=sleek%20wireless%20charging%20station%20white%20color%20minimalist%20design%20on%20white%20background%20product%20photography%20high%20quality&width=300&height=300&seq=wish004&orientation=squarish',
    inStock: true,
    rating: 4.5,
    reviews: 567
  },
  {
    id: '5',
    name: 'Smart LED Desk Lamp',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://readdy.ai/api/search-image?query=modern%20smart%20led%20desk%20lamp%20black%20color%20adjustable%20arm%20on%20white%20background%20product%20photography%20high%20quality&width=300&height=300&seq=wish005&orientation=squarish',
    inStock: true,
    rating: 4.7,
    reviews: 923
  },
  {
    id: '6',
    name: 'Bluetooth Speaker Portable',
    price: 149.99,
    originalPrice: null,
    image: 'https://readdy.ai/api/search-image?query=portable%20bluetooth%20speaker%20cylindrical%20shape%20black%20color%20on%20white%20background%20product%20photography%20high%20quality&width=300&height=300&seq=wish006&orientation=squarish',
    inStock: true,
    rating: 4.6,
    reviews: 1456
  }
];
