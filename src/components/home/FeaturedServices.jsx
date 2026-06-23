import { useEffect, useRef } from "react";
import {
  Plane,
  Hotel,
  Stamp,
  Landmark,
  MapPinned,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeaturedServices() {
  const sectionRef = useRef(null);

  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      text: "Book domestic and international flights with trusted support.",
    },
    {
      icon: Hotel,
      title: "Hotel Reservation",
      text: "Find comfortable hotels for family, business and tourism trips.",
    },
    {
      icon: Stamp,
      title: "Visa Assistance",
      text: "Professional visa support for different travel destinations.",
    },
 {
  icon: Landmark,
  title: "Hajj & Umrah",
  text: "Complete Hajj and Umrah packages with reliable guidance.",
},
    {
      icon: MapPinned,
      title: "Tour Packages",
      text: "Explore Afghanistan and worldwide destinations with us.",
    },
    {
      icon: ShieldCheck,
      title: "Travel Insurance",
      text: "Travel safely with insurance support and trusted services.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-heading",
        { opacity: 0, y: 45 },
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

      gsap.utils.toArray(".service-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
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
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="services-heading text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <Plane size={17} />
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Complete Travel Solutions
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400 leading-8">
            We provide professional travel services for tourists, families,
            students, workers and business travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative p-8 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:-translate-y-2 transition duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#000080]/10 rounded-bl-full group-hover:bg-orange-500/15 transition" />

              <div className="relative w-16 h-16 rounded-3xl bg-[#000080] text-white flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition">
                <service.icon size={32} />
              </div>

              <h3 className="relative mt-7 text-2xl font-black text-slate-900 dark:text-white">
                {service.title}
              </h3>

              <p className="relative mt-4 text-slate-500 dark:text-slate-400 leading-7">
                {service.text}
              </p>

              <button className="relative mt-7 flex items-center gap-3 text-[#000080] dark:text-orange-400 font-black group-hover:text-orange-500 transition">
                Learn More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;