import BookingHero from "../components/booking/BookingHero";
import BookingSteps from "../components/booking/BookingSteps";
import BookingForm from "../components/booking/BookingForm";
import CTASection from "../components/home/CTASection";

function Booking() {
  return (
    <>
      <BookingHero />
      <BookingSteps />
      <BookingForm />
      <CTASection />
    </>
  );
}

export default Booking;