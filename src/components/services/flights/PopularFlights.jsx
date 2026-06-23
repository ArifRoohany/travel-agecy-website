import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Clock3,
  Plane,
  BadgeCheck,
  MapPin,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PopularFlights() {
  const sectionRef = useRef(null);

  const flights = [
    {
      from: "Kabul",
      to: "Dubai",
      price: "$280",
      time: "3h 10m",
      type: "Direct Flight",
      image: "/services/flights/routes/dubai.jpg",
    },
    {
      from: "Kabul",
      to: "Istanbul",
      price: "$390",
      time: "5h 20m",
      type: "International",
      image: "/services/flights/routes/istanbul.jpg",
    },
    {
      from: "Kabul",
      to: "Delhi",
      price: "$220",
      time: "2h 45m",
      type: "Economy Deal",
      image: "/services/flights/routes/delhi.jpg",
    },
    {
      from: "Kabul",
      to: "Jeddah",
      price: "$420",
      time: "4h 50m",
      type: "Umrah Route",
      image: "/services/flights/routes/jeddah.jpg",
    },
    {
      from: "Kabul",
      to: "London",
      price: "$680",
      time: "9h 30m",
      type: "Premium Route",
      image: "/services/flights/routes/london.jpg",
    },
    {
      from: "Kabul",
      to: "Frankfurt",
      price: "$620",
      time: "8h 45m",
      type: "Europe Route",
      image: "/services/flights/routes/frankfurt.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".popular-flight-heading",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".popular-flight-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 55, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="popular-flight-heading text-center max-w-4xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <Plane size={17} />
            POPULAR FLIGHTS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Featured Flight{" "}
            <span className="text-orange-500">Routes</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7 text-lg">
            Explore our most requested flight routes with affordable prices and
            reliable booking support.
          </p>

          <div className="mt-6 mx-auto w-28 h-1.5 rounded-full bg-gradient-to-r from-[#000080] to-orange-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {flights.map((flight) => (
            <div
              key={`${flight.from}-${flight.to}`}
              className="popular-flight-card group rounded-[30px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={flight.image}
                  alt={`${flight.from} to ${flight.to}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/80 via-black/20 to-transparent" />

                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-900/90 text-[#000080] dark:text-orange-400 font-black text-sm shadow-lg">
                  From {flight.price}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-3xl font-black text-white">
                    {flight.from} → {flight.to}
                  </h3>
                  <p className="mt-2 text-white/85 font-semibold">
                    {flight.type}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">
                    <div className="flex items-center gap-2 text-orange-500">
                      <Clock3 size={18} />
                      <span className="font-black text-sm">Time</span>
                    </div>
                    <p className="mt-2 font-bold text-slate-900 dark:text-white">
                      {flight.time}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">
                    <div className="flex items-center gap-2 text-orange-500">
                      <BadgeCheck size={18} />
                      <span className="font-black text-sm">Status</span>
                    </div>
                    <p className="mt-2 font-bold text-slate-900 dark:text-white">
                      Available
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-semibold">
                    <MapPin size={18} />
                    Best airline deals
                  </div>

                  <WalletCards className="text-orange-500" size={22} />
                </div>

                <Link
                  to="/booking"
                  className="mt-6 w-full h-14 rounded-2xl bg-[#000080] text-white font-black flex items-center justify-center gap-3 hover:bg-orange-500 transition shadow-lg"
                >
                  Book Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularFlights;