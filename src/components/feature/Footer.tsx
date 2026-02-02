export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-teal-100 text-sm leading-relaxed mb-4">
              Your trusted source for quality medical supplies and equipment. Serving healthcare professionals and facilities nationwide.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-teal-600 hover:bg-teal-500 rounded-full transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-teal-600 hover:bg-teal-500 rounded-full transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-teal-600 hover:bg-teal-500 rounded-full transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-teal-600 hover:bg-teal-500 rounded-full transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Shipping Information</a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Track Your Order</a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Medical Devices</a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">PPE & Safety</a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Mobility Aids</a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Respiratory Care</a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Special Offers</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-lg mt-0.5"></i>
                <span className="text-teal-100">123 Medical Plaza, Healthcare District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-phone-line text-lg"></i>
                <span className="text-teal-100">1-800-HOSPITAL</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-mail-line text-lg"></i>
                <span className="text-teal-100">support@hospitalstore.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-time-line text-lg"></i>
                <span className="text-teal-100">Mon-Fri: 8AM - 8PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-teal-100">
              © 2025 Hospital Store. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-white transition-colors cursor-pointer">Website Builder</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}