import DestinationsHero from "../components/destinations/DestinationsHero";
import DestinationsFilter from "../components/destinations/DestinationsFilter";
import DestinationsGrid from "../components/destinations/DestinationsGrid";
import CTASection from "../components/home/CTASection";

function Destinations() {
  return (
    <>
      <DestinationsHero />
      <DestinationsFilter />
      <DestinationsGrid />
      <CTASection />
    </>
  );
}

export default Destinations;