
import Layout from '@/components/layout/Layout';
import HeroBanner from '@/components/home/HeroBanner';
import FoodCategories from '@/components/home/FoodCategories';
import FeaturedRestaurants from '@/components/home/FeaturedRestaurants';
import HowItWorks from '@/components/home/HowItWorks';
import AppDownload from '@/components/home/AppDownload';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <HeroBanner />
        <FoodCategories />
        <FeaturedRestaurants />
        <HowItWorks />
        <Testimonials />
        <AppDownload />
      </div>
    </Layout>
  );
};

export default Index;
