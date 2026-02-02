import { categories } from '../../mocks/products';

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-teal-50 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mb-4 group-hover:bg-teal-600 transition-colors">
                <i className={`${category.icon} text-3xl text-teal-600 group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500">
                {category.count} items
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}