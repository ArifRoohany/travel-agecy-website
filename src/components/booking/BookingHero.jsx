import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Headphones,
  ShieldCheck,
  Star,
  Users,
  Globe2,
  Briefcase,
  Plane,
  Bed,
  FileCheck,
} from "lucide-react";
import gsap from "gsap";

function BookingHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-hero-item", {
        opacity: 0,
        y: 45,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
      });

      gsap.from(".booking-hero-bg", {
        opacity: 0,
        x: 80,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(".booking-service-card", {
        opacity: 0,
        x: 55,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      text: "Domestic & International",
    },
    {
      icon: Bed,
      title: "Hotel Booking",
      text: "Best Hotels & Resorts",
    },
    {
      icon: FileCheck,
      title: "Visa Services",
      text: "Tourist & Business Visa",
    },
  ];

  const stats = [
    {
      icon: Briefcase,
      number: "10K+",
      text: "Happy Travelers",
    },
    {
      icon: Globe2,
      number: "50+",
      text: "Top Destinations",
    },
    {
      icon: Star,
      number: "5K+",
      text: "Tour Packages",
    },
    {
      icon: Users,
      number: "24/7",
      text: "Customer Support",
    },
  ];

  return (
   <section
  ref={heroRef}
  className="relative min-h-[760px] pb-28 bg-white dark:bg-slate-950 overflow-hidden transition-colors"
>
      <div className="absolute inset-0">
        <img
          src="/booking/booking-hero-bg.png"
          alt="Booking Hero"
          className="booking-hero-bg absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/15 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-10">
        <div className="booking-hero-item flex items-center gap-2 text-sm font-bold">
          <Link to="/" className="text-slate-600 dark:text-slate-300">
            Home
          </Link>
          <span className="text-slate-400">›</span>
          <span className="text-orange-500">Booking</span>
        </div>

        <div className="mt-20 max-w-2xl">
          <div className="booking-hero-item inline-flex items-center gap-3 px-5 py-3 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black shadow-lg">
            <CalendarDays size={21} />
            BOOK YOUR TRIP
          </div>

          <h1 className="booking-hero-item mt-7 text-5xl md:text-7xl font-black leading-tight text-slate-950 dark:text-white">
            Reserve Your
            <br />
            Dream Journey
            <br />
            <span className="text-orange-500">Today</span>
          </h1>

          <p className="booking-hero-item mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-xl">
            Easy and secure booking for flights, hotels, tours and visa
            services. Start your journey with confidence.
          </p>

          <div className="booking-hero-item mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="group px-7 py-4 rounded-2xl bg-[#000080] text-white font-black flex items-center gap-3 hover:bg-orange-500 transition shadow-xl"
            >
              <CalendarDays size={21} />
              Start Booking
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            <Link
              to="/contact"
              className="px-7 py-4 rounded-2xl border border-[#000080]/30 dark:border-white/30 text-[#000080] dark:text-white font-black flex items-center gap-3 hover:bg-[#000080] hover:text-white transition"
            >
              <Headphones size={21} />
              Contact Us
            </Link>
          </div>

          <div className="booking-hero-item mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <ShieldCheck size={25} />
              </div>
              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  Secure Booking
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <Headphones size={25} />
              </div>
              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  24/7 Support
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <Star size={25} />
              </div>
              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  Best Price
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-[34%] top-[300px] w-[270px] rounded-[28px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-slate-100 dark:border-slate-800 p-5">
          {services.map((item, index) => (
            <div
              key={item.title}
              className={`booking-service-card flex items-center gap-4 py-4 ${
                index !== services.length - 1
                  ? "border-b border-slate-200 dark:border-slate-700"
                  : ""
              }`}
            >
              <div className="w-13 h-13 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <item.icon size={25} />
              </div>

              <div>
                <h4 className="font-black text-[#000080] dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="booking-hero-item relative mt-16 max-w-7xl mx-auto">
          <div className="rounded-[28px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 lg:border-r last:border-r-0 border-slate-200 dark:border-slate-800 lg:pr-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#000080] text-white flex items-center justify-center shadow-lg">
                  <item.icon size={30} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-orange-500">
                    {item.number}
                  </h3>
                  <p className="font-semibold text-slate-600 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingHero;