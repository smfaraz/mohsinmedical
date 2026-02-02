import Navbar from '../../components/feature/Navbar';
import HeroCarousel from '../../components/feature/HeroCarousel';
import CategorySection from '../../components/feature/CategorySection';
import FeaturedProducts from '../../components/feature/FeaturedProducts';
import OfferBanners from '../../components/feature/OfferBanners';
import Footer from '../../components/feature/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <CategorySection />
      <FeaturedProducts />
      <OfferBanners />
      <Footer />
    </div>
  );
}