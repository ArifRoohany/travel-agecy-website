import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollToTopButton />
    </>
  );
}

export default MainLayout;