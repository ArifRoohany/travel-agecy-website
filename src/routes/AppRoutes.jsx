import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Booking from "../pages/Booking";
import VisaServices from "../pages/VisaServices";
import FlightTickets from "../pages/FlightTickets";
import HotelBooking from "../pages/HotelBooking.jsx";
import HajjUmrah from "../pages/HajjUmrah";
import NotFound from "../pages/NotFound";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "tours",
        element: <Tours />,
      },
      {
        path: "tours/:id",
        element: <TourDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "booking",
        element: <Booking />,
      },

      {
  path: "services/visa",
  element: <VisaServices />,
},
{
  path: "services/flights",
  element: <FlightTickets />,
},
{
  path: "services/hotels",
  element: <HotelBooking />,
},
{
  path: "services/hajj-umrah",
  element: <HajjUmrah />,
},
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default AppRoutes;