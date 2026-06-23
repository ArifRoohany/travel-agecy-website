import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Plane,
  Moon,
  Sun,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Tours", path: "/tours" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Visa Services", path: "/services/visa" },
    { name: "Flight Tickets", path: "/services/flights" },
    { name: "Hotel Booking", path: "/services/hotels" },
    { name: "Hajj & Umrah", path: "/services/hajj-umrah" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-lg transition-colors duration-300">
      <div className="hidden lg:block bg-[#000080] dark:bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-orange-400" />
              +93 792 365 269
            </span>

            <span className="flex items-center gap-2">
              <Mail size={16} className="text-orange-400" />
              info@travelagency.af
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-400" />
              Kabul, Afghanistan
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-orange-400" />
              Sat - Thu: 8:00 AM - 6:00 PM
            </span>

            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-orange-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#000080] flex items-center justify-center shadow-md">
              <Plane className="text-white" size={26} />
            </div>

            <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white leading-none">
                Afghan
                <span className="text-[#000080] dark:text-orange-400">
                  Travel
                </span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Explore Afghanistan & World
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-semibold transition ${
                    isActive
                      ? "text-[#000080] dark:text-orange-400"
                      : "text-slate-700 dark:text-slate-200 hover:text-[#000080] dark:hover:text-orange-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="relative group">
              <button className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 hover:text-[#000080] dark:hover:text-orange-400 transition">
                Services
                <ChevronDown size={16} />
              </button>

              <div className="absolute top-8 left-0 w-56 bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 dark:border-slate-800">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-[#000080] dark:hover:text-orange-400"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="https://wa.me/93792365269"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition shadow-md"
            >
              <FaWhatsapp size={20} />
            </a>

            <Link
              to="/booking"
              className="px-6 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition shadow-lg"
            >
              Book Now
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white flex items-center justify-center"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white flex items-center justify-center"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-all overflow-hidden ${
          open ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block font-semibold ${
                  isActive
                    ? "text-[#000080] dark:text-orange-400"
                    : "text-slate-700 dark:text-slate-200"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Services
            </p>

            {services.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                onClick={() => setOpen(false)}
                className="block text-slate-700 dark:text-slate-200"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="block text-center px-6 py-3 rounded-full bg-orange-500 text-white font-bold"
          >
            Book Now
          </Link>

          <a
            href="https://wa.me/93792365269"
            target="_blank"
            rel="noreferrer"
            className="block text-center px-6 py-3 rounded-full bg-green-500 text-white font-bold"
          >
            WhatsApp Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;