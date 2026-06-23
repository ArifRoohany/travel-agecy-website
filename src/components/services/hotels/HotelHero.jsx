import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Headphones,
  ShieldCheck,
  Star,
  Building2,
} from "lucide-react";
import gsap from "gsap";

function HotelHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hotel-hero-item", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hotel-hero-bg", {
        opacity: 0,
        x: 80,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[700px] overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="absolute inset-0">
        <img
          src="/services/hotels/hotel-hero-bg.jpg"
          alt="Hotel Booking"
          className="hotel-hero-bg w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="hotel-hero-item inline-flex items-center gap-3 px-5 py-3 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-500 font-black">
            <BedDouble size={20} />
            HOTEL BOOKING
          </div>

          <h1 className="hotel-hero-item mt-7 text-5xl md:text-7xl font-black leading-tight text-slate-900 dark:text-white">
            Find Your
            <br />
            Perfect Hotel
            <br />
            <span className="text-orange-500">Stay</span>
          </h1>

          <p className="hotel-hero-item mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-2xl">
            Book luxury hotels, resorts and business accommodations worldwide
            with the best rates and instant confirmation.
          </p>

          <div className="hotel-hero-item mt-8 flex flex-wrap gap-5">
            <Link
              to="/booking"
              className="group px-7 py-4 rounded-2xl bg-[#000080] text-white font-black flex items-center gap-3 hover:bg-orange-500 transition shadow-xl"
            >
              Book Hotel
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            <Link
              to="/contact"
              className="px-7 py-4 rounded-2xl border border-[#000080]/20 dark:border-white/20 font-black text-[#000080] dark:text-white hover:bg-[#000080] hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>

          <div className="hotel-hero-item mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <ShieldCheck size={26} />
              </div>
              <h3 className="font-black text-slate-900 dark:text-white">
                Secure Booking
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <Star size={26} />
              </div>
              <h3 className="font-black text-slate-900 dark:text-white">
                Best Hotels
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <Headphones size={26} />
              </div>
              <h3 className="font-black text-slate-900 dark:text-white">
                24/7 Support
              </h3>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-10 top-40">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 p-6 w-[320px]">
            <div className="flex items-center gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Building2 size={28} />
              </div>

              <div>
                <h3 className="font-black text-slate-900 dark:text-white">
                  Hotel Booking
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Luxury & Business Hotels
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <Star className="text-orange-500" size={20} />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  5 Star Hotels
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays className="text-orange-500" size={20} />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Instant Confirmation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Headphones className="text-orange-500" size={20} />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Travel Assistance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelHero;