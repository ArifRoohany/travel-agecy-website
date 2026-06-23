import { useEffect, useRef } from "react";
import {
  Globe2,
  Headphones,
  MapPinned,
  Plane,
  Star,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutStats() {
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Users,
      number: "10K+",
      title: "Happy Travelers",
      text: "Customers trust our travel services.",
    },
    {
      icon: Globe2,
      number: "120+",
      title: "Destinations",
      text: "Local and international destinations.",
    },
    {
      icon: Plane,
      number: "500+",
      title: "Tour Packages",
      text: "Ready-made and custom travel packages.",
    },
    {
      icon: Headphones,
      number: "24/7",
      title: "Support",
      text: "Our team is always ready to help.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stats-heading",
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

      gsap.utils.toArray(".stats-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 55, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            delay: index * 0.1,
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
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-16 right-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-16 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="stats-heading text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <Star size={17} />
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Trusted By Thousands
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Our success comes from happy customers, reliable travel services,
            and professional support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {stats.map((item) => (
            <div
              key={item.title}
              className="stats-card group relative overflow-hidden rounded-[32px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl p-8 text-center hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#000080]/10 group-hover:bg-orange-500/15 transition" />

              <div className="relative mx-auto w-18 h-18 rounded-3xl bg-[#000080] text-white flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition">
                <item.icon size={34} />
              </div>

              <h3 className="relative mt-6 text-5xl font-black text-[#000080] dark:text-white">
                {item.number}
              </h3>

              <h4 className="relative mt-3 text-xl font-black text-slate-900 dark:text-white">
                {item.title}
              </h4>

              <p className="relative mt-3 text-slate-500 dark:text-slate-400 leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] bg-[#000080] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-3xl font-black text-white">
              Experience professional travel planning
            </h3>
            <p className="mt-2 text-white/80">
              Flights, hotels, visa support and tour packages — all in one place.
            </p>
          </div>

          <div className="flex items-center gap-4 text-white">
            <MapPinned size={34} className="text-orange-400" />
            <div>
              <h4 className="font-black text-xl">Afghanistan & Worldwide</h4>
              <p className="text-white/75">Trusted destinations and services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStats;