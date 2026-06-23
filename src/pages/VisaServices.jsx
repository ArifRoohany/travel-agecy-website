import VisaHero from "../components/services/visa/VisaHero";
import VisaRequirements from "../components/services/visa/VisaRequirements";
import VisaProcess from "../components/services/visa/VisaProcess";
import VisaCountries from "../components/services/visa/VisaCountries";
import VisaFAQ from "../components/services/visa/VisaFAQ";
import CTASection from "../components/home/CTASection";

function VisaServices() {
  return (
    <>
      <VisaHero />
      <VisaRequirements />
      <VisaProcess />
      <VisaCountries />
      <VisaFAQ />
      <CTASection />
    </>
  );
}

export default VisaServices;