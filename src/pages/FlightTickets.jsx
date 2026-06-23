import FlightHero from "../components/services/flights/FlightHero";
import FlightSearch from "../components/services/flights/FlightSearch";
import PopularFlights from "../components/services/flights/PopularFlights";
import FlightProcess from "../components/services/flights/FlightProcess";
import FlightFAQ from "../components/services/flights/FlightFAQ";

function FlightTickets() {
  return (
    <>
      <FlightHero />
      <FlightSearch />
      <PopularFlights />
      <FlightProcess />
      <FlightFAQ />
    </>
  );
}

export default FlightTickets;