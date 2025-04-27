
import Layout from '@/components/layout/Layout';
import HeroBanner from '@/components/home/HeroBanner';
import FoodCategories from '@/components/home/FoodCategories';
import FeaturedRestaurants from '@/components/home/FeaturedRestaurants';
import HowItWorks from '@/components/home/HowItWorks';
import AppDownload from '@/components/home/AppDownload';

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <FoodCategories />
      <FeaturedRestaurants />
      <HowItWorks />
      <AppDownload />
    </Layout>
  );
};

export default Index;
