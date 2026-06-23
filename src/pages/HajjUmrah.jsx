import CTASection from "../components/home/CTASection";
import HajjFAQ from "../components/services/hajj/HajjFAQ";
import HajjHero from "../components/services/hajj/HajjHero";
import HajjPackages from "../components/services/hajj/HajjPackages";
import HajjProcess from "../components/services/hajj/HajjProcess";

function HajjUmrah() {
  return (
    <>
      <HajjHero />
      <HajjPackages />
      <HajjProcess />
      <HajjFAQ />
      <CTASection />
    </>
  );
}

export default HajjUmrah;