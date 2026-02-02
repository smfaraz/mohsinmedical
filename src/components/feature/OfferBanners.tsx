import { offerBanners } from '../../mocks/products';

export default function OfferBanners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerBanners.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer h-64"
            >
              <div className="w-full h-full">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                {offer.discount && (
                  <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3 w-fit">
                    {offer.discount}
                  </div>
                )}
                {offer.badge && (
                  <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-3 w-fit">
                    {offer.badge}
                  </div>
                )}
                <h3 className="text-3xl font-bold text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-lg text-white mb-6">
                  {offer.description}
                </p>
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors w-fit whitespace-nowrap">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}