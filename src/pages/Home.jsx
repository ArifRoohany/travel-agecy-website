import HeroSlider from "../components/home/HeroSlider";
import HowItWorks from "../components/home/HowItWorks";
import PopularDestinations from "../components/home/PopularDestinations";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedServices from "../components/home/FeaturedServices";
import FeaturedTours from "../components/home/FeaturedTours";
import Testimonials from "../components/home/Testimonials";
import TravelBlog from "../components/home/TravelBlog";
import CTASection from "../components/home/CTASection";

function Home() {
  return (
    <>
      <HeroSlider />
      <PopularDestinations />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedServices />
      <FeaturedTours />
      <Testimonials />
      <TravelBlog />
      <CTASection />
      
    </>
  );
}

export default Home;