import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import OfficeLocation from "../components/contact/OfficeLocation";
import FAQSection from "../components/contact/FAQSection";
import CTASection from "../components/home/CTASection";

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <OfficeLocation />
      <FAQSection />
      <CTASection />
    </>
  );
}

export default Contact;