import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  CheckCircle,
  Headphones,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  UserRound,
  WalletCards,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HotelSearch() {
  const sectionRef = useRef(null);

  const benefits = [
    { icon: WalletCards, title: "Best Hotel Rates" },
    { icon: BedDouble, title: "Luxury & Budget Options" },
    { icon: CheckCircle, title: "Instant Confirmation" },
    { icon: Headphones, title: "24/7 Hotel Support" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hotel-search-animate",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div className="hotel-search-animate rounded-[36px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <Search size={17} />
            SEARCH HOTELS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Find Your Perfect Stay
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Search hotels, resorts and apartments with the best rates and fast
            confirmation.
          </p>

          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative md:col-span-2">
              <MapPin
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000080] dark:text-orange-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Destination / City"
                className="w-full h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition"
              />
            </div>

            <div className="relative">
              <CalendarDays
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000080] dark:text-orange-400"
                size={20}
              />
              <input
                type="date"
                className="w-full h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition"
              />
            </div>

            <div className="relative">
              <CalendarDays
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000080] dark:text-orange-400"
                size={20}
              />
              <input
                type="date"
                className="w-full h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition"
              />
            </div>

            <div className="relative">
              <UserRound
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000080] dark:text-orange-400"
                size={20}
              />
              <input
                type="number"
                placeholder="Guests"
                min="1"
                className="w-full h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition"
              />
            </div>

            <div className="relative">
              <BedDouble
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000080] dark:text-orange-400"
                size={20}
              />
              <select className="w-full h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition">
                <option>Room Type</option>
                <option>Single Room</option>
                <option>Double Room</option>
                <option>Family Room</option>
                <option>Luxury Suite</option>
              </select>
            </div>

            <button className="md:col-span-2 h-16 rounded-2xl bg-[#000080] text-white font-black flex items-center justify-center gap-3 hover:bg-orange-500 transition shadow-xl">
              Search Hotels
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        <div className="hotel-search-animate">
          <div className="relative overflow-hidden rounded-[36px] bg-[#000080] dark:bg-slate-900 shadow-2xl border border-[#000080]/20 dark:border-slate-800 p-8">
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-orange-500/20 blur-2xl" />

            <div className="relative">
              <div className="w-18 h-18 rounded-[26px] bg-orange-500 text-white flex items-center justify-center shadow-xl">
                <BedDouble size={36} />
              </div>

              <h3 className="mt-6 text-3xl font-black text-white">
                Why Book Hotels With Us?
              </h3>

              <p className="mt-4 text-white/80 leading-7">
                We help you book trusted hotels with better prices, safe
                booking and quick confirmation.
              </p>

              <div className="mt-7 grid gap-4">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 dark:bg-white/5 p-4 text-white"
                  >
                    <item.icon className="text-orange-400" size={23} />
                    <span className="font-bold">{item.title}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/93792365269"
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full h-15 rounded-2xl bg-orange-500 text-white flex items-center justify-center gap-3 font-black hover:bg-orange-600 transition shadow-xl"
              >
                <Headphones size={20} />
                Need Help? Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelSearch;