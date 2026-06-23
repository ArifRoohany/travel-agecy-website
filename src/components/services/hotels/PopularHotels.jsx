import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BedDouble,
  MapPin,
  Star,
  Wifi,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PopularHotels() {
  const sectionRef = useRef(null);

  const hotels = [
    {
      name: "Dubai Luxury Resort",
      city: "Dubai, UAE",
      image: "/services/hotels/popular/dubai-hotel.jpg",
      price: "$220",
      rating: "4.9",
    },
    {
      name: "Istanbul Grand Hotel",
      city: "Istanbul, Turkey",
      image: "/services/hotels/popular/istanbul-hotel.jpg",
      price: "$180",
      rating: "4.8",
    },
    {
      name: "London Royal Suites",
      city: "London, UK",
      image: "/services/hotels/popular/london-hotel.jpg",
      price: "$260",
      rating: "5.0",
    },
    {
      name: "Jeddah Beach Hotel",
      city: "Jeddah, Saudi Arabia",
      image: "/services/hotels/popular/jeddah-hotel.jpg",
      price: "$190",
      rating: "4.8",
    },
    {
      name: "Frankfurt Business Hotel",
      city: "Frankfurt, Germany",
      image: "/services/hotels/popular/frankfurt-hotel.jpg",
      price: "$210",
      rating: "4.9",
    },
    {
      name: "Delhi Palace Hotel",
      city: "Delhi, India",
      image: "/services/hotels/popular/delhi-hotel.jpg",
      price: "$170",
      rating: "4.7",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hotel-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".hotel-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
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
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="hotel-heading text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-500 font-black text-sm">
            <BedDouble size={16} />
            POPULAR HOTELS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Luxury Hotels Around
            <span className="text-orange-500"> The World</span>
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Discover top-rated hotels and resorts with premium services,
            excellent locations and unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="hotel-card group bg-white dark:bg-slate-900 rounded-[30px] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-5 right-5 bg-white dark:bg-slate-900 px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Star
                    size={16}
                    className="text-yellow-500 fill-yellow-500"
                  />
                  <span className="font-bold text-sm">
                    {hotel.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                  <MapPin size={15} />
                  {hotel.city}
                </div>

                <h3 className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
                  {hotel.name}
                </h3>

                <div className="mt-4 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Wifi size={15} />
                    Free WiFi
                  </span>

                  <span className="flex items-center gap-1">
                    <BedDouble size={15} />
                    Luxury Room
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">
                      Starting From
                    </p>

                    <h4 className="text-3xl font-black text-orange-500">
                      {hotel.price}
                      <span className="text-base text-slate-500">
                        /night
                      </span>
                    </h4>
                  </div>

                  <button className="group/btn w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center hover:bg-orange-500 transition">
                    <ArrowRight
                      size={20}
                      className="group-hover/btn:translate-x-1 transition"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularHotels;