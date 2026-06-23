import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Clock,
  Heart,
  Hotel,
  MapPin,
  Plane,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ToursGrid() {
  const sectionRef = useRef(null);

  const tours = [
    {
      title: "Dubai Luxury Package",
      location: "Dubai, UAE",
      price: "$650",
      duration: "5 Days / 4 Nights",
      people: "2-10 People",
      type: "Luxury",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "Istanbul Family Tour",
      location: "Istanbul, Turkey",
      price: "$520",
      duration: "6 Days / 5 Nights",
      people: "2-12 People",
      type: "Family",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "Bamyan Adventure Tour",
      location: "Bamyan, Afghanistan",
      price: "$180",
      duration: "4 Days / 3 Nights",
      people: "2-8 People",
      type: "Adventure",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "Malaysia Holiday Trip",
      location: "Kuala Lumpur, Malaysia",
      price: "$750",
      duration: "7 Days / 6 Nights",
      people: "2-10 People",
      type: "Holiday",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "Hajj & Umrah Package",
      location: "Makkah, Saudi Arabia",
      price: "$1200",
      duration: "12 Days / 11 Nights",
      people: "2-20 People",
      type: "Religious",
      image:
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=90",
    },
    {
      title: "Baku City Tour",
      location: "Baku, Azerbaijan",
      price: "$480",
      duration: "5 Days / 4 Nights",
      people: "2-8 People",
      type: "City Tour",
      image:
        "https://images.unsplash.com/photo-1605629675255-76ac50eab1c2?auto=format&fit=crop&w=900&q=90",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tours-grid-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".tour-grid-card").forEach((card, index) => {
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
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="tours-grid-heading flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
              ALL TOUR PACKAGES
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              Explore Our Best Tours
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl leading-7">
              Choose from our complete travel packages with hotel, flight, visa
              support and professional planning.
            </p>
          </div>

          <p className="text-slate-500 dark:text-slate-400 font-bold">
            Showing {tours.length} packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="tour-grid-card group rounded-[34px] bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[310px] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/90 via-black/20 to-transparent" />

                <button className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition">
                  <Heart size={21} />
                </button>

                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-orange-500 text-white font-black">
                  {tour.type}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="flex items-center gap-2 text-white/85">
                    <MapPin size={18} className="text-orange-400" />
                    {tour.location}
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    {tour.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex text-orange-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <span className="font-black text-[#000080] dark:text-orange-400">
                    {tour.price}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 flex items-center gap-3">
                    <Clock
                      size={20}
                      className="text-[#000080] dark:text-orange-400"
                    />
                    <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                      {tour.duration}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 flex items-center gap-3">
                    <Users
                      size={20}
                      className="text-[#000080] dark:text-orange-400"
                    />
                    <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                      {tour.people}
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-3">
                    <Hotel
                      className="mx-auto text-[#000080] dark:text-orange-400"
                      size={20}
                    />
                    <p className="mt-1 text-xs font-bold text-slate-500">
                      Hotel
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-3">
                    <Plane
                      className="mx-auto text-[#000080] dark:text-orange-400"
                      size={20}
                    />
                    <p className="mt-1 text-xs font-bold text-slate-500">
                      Flight
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-3">
                    <ShieldCheck
                      className="mx-auto text-[#000080] dark:text-orange-400"
                      size={20}
                    />
                    <p className="mt-1 text-xs font-bold text-slate-500">
                      Support
                    </p>
                  </div>
                </div>

                <button className="mt-6 w-full py-4 rounded-2xl bg-[#000080] text-white font-black flex items-center justify-center gap-3 hover:bg-orange-500 transition">
                  Book Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToursGrid;