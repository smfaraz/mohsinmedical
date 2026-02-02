import { featuredProducts } from '../mocks/products';
import { productDetail } from '../mocks/productDetail';
import { cartItems } from '../mocks/cartItems';
import { categoryProducts } from '../mocks/categoryProducts';
import { searchResults } from '../mocks/searchResults';
import { userProfile } from '../mocks/userProfile';
import { adminData } from '../mocks/adminData';

// Product Services
export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(featuredProducts);
    }, 300);
  });
};

export const getProductById = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productDetail);
    }, 300);
  });
};

export const getProductsByCategory = async (category: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoryProducts);
    }, 300);
  });
};

export const getFeaturedProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(featuredProducts.slice(0, 8));
    }, 300);
  });
};

export const getRelatedProducts = async (productId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productDetail.relatedProducts);
    }, 300);
  });
};

// Cart Services
export const getCart = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartItems);
    }, 300);
  });
};

export const addToCart = async (productId: string, quantity: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Product added to cart' });
    }, 300);
  });
};

export const updateCartItem = async (itemId: string, quantity: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Cart updated' });
    }, 300);
  });
};

export const removeFromCart = async (itemId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Item removed from cart' });
    }, 300);
  });
};

export const applyCoupon = async (couponCode: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, discount: 10, message: 'Coupon applied' });
    }, 300);
  });
};

// Order Services
export const getOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userProfile.orders);
    }, 300);
  });
};

export const getOrderById = async (orderId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userProfile.orders[0]);
    }, 300);
  });
};

export const createOrder = async (orderData: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        success: true, 
        orderId: 'ORD-' + Date.now(),
        message: 'Order placed successfully' 
      });
    }, 300);
  });
};

// User Services
export const getUserProfile = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userProfile);
    }, 300);
  });
};

export const updateUserProfile = async (profileData: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Profile updated' });
    }, 300);
  });
};

export const getWishlist = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userProfile.wishlist);
    }, 300);
  });
};

export const addToWishlist = async (productId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Added to wishlist' });
    }, 300);
  });
};

export const removeFromWishlist = async (productId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Removed from wishlist' });
    }, 300);
  });
};

export const getAddresses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userProfile.addresses);
    }, 300);
  });
};

export const addAddress = async (addressData: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Address added' });
    }, 300);
  });
};

export const updateAddress = async (addressId: string, addressData: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Address updated' });
    }, 300);
  });
};

export const deleteAddress = async (addressId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Address deleted' });
    }, 300);
  });
};

// Search Services
export const searchProducts = async (query: string, filters?: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(searchResults);
    }, 300);
  });
};

// Admin Services
export const getAdminDashboard = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(adminData.dashboard);
    }, 300);
  });
};

export const getAdminOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(adminData.orders);
    }, 300);
  });
};

export const getAdminProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(adminData.products);
    }, 300);
  });
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Order status updated' });
    }, 300);
  });
};

export const updateProductStock = async (productId: string, stock: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Stock updated' });
    }, 300);
  });
};

// Auth Services
export const login = async (email: string, password: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        success: true, 
        token: 'mock-jwt-token',
        user: userProfile 
      });
    }, 300);
  });
};

export const signup = async (userData: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        success: true, 
        token: 'mock-jwt-token',
        user: userData 
      });
    }, 300);
  });
};

export const logout = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Logged out successfully' });
    }, 300);
  });
};
