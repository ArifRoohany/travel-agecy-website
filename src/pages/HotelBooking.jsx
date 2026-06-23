import HotelHero from "../components/services/hotels/HotelHero";
import HotelSearch from "../components/services/hotels/HotelSearch";
import PopularHotels from "../components/services/hotels/PopularHotels";
import HotelProcess from "../components/services/hotels/HotelProcess";
import HotelFAQ from "../components/services/hotels/HotelFAQ";

function HotelBooking() {
  return (
    <>
      <HotelHero />
      <HotelSearch />
      <PopularHotels />
      <HotelProcess />
      <HotelFAQ />
    </>
  );
}

export default HotelBooking;