import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-animate", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#000080] dark:bg-slate-950 text-white"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="footer-animate">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                <Plane className="text-[#000080]" size={26} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Afghan<span className="text-orange-400">Travel</span>
                </h2>
                <p className="text-sm text-white/70">
                  Explore Afghanistan & World
                </p>
              </div>
            </Link>

            <p className="mt-5 text-white/75 leading-7">
              We provide professional travel services, visa support, flight
              tickets, hotel booking, tours, and Hajj & Umrah packages for
              customers in Afghanistan.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-animate">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>

            <div className="space-y-3">
              {[
                ["Home", "/"],
                ["Destinations", "/destinations"],
                ["Tours", "/tours"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
                ["Booking", "/booking"],
              ].map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  className="group flex items-center gap-2 text-white/75 hover:text-orange-400 transition"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-animate">
            <h3 className="text-xl font-bold mb-6">Our Services</h3>

            <div className="space-y-3">
              {[
                "Visa Services",
                "Flight Tickets",
                "Hotel Booking",
                "Tour Packages",
                "Hajj & Umrah",
                "Travel Consultancy",
              ].map((service) => (
                <p
                  key={service}
                  className="flex items-center gap-2 text-white/75 hover:text-orange-400 transition cursor-pointer"
                >
                  <ArrowRight size={16} />
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-animate">
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>

            <div className="space-y-4">
              <p className="flex gap-3 text-white/75">
                <Phone className="text-orange-400 shrink-0" size={20} />
                +93 792 365 269
              </p>

              <p className="flex gap-3 text-white/75">
                <Mail className="text-orange-400 shrink-0" size={20} />
                info@travelagency.af
              </p>

              <p className="flex gap-3 text-white/75">
                <MapPin className="text-orange-400 shrink-0" size={20} />
                Kabul, Afghanistan
              </p>

              <p className="flex gap-3 text-white/75">
                <Clock className="text-orange-400 shrink-0" size={20} />
                Sat - Thu: 8:00 AM - 6:00 PM
              </p>
            </div>

            <div className="mt-6 flex bg-white rounded-full overflow-hidden p-1">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 outline-none text-slate-800"
              />

              <button className="w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-animate mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          <p>© 2026 AfghanTravel. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link className="hover:text-orange-400">Privacy Policy</Link>
            <Link className="hover:text-orange-400">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;