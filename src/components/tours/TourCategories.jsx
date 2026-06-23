import { useEffect, useRef } from "react";
import {
  Mountain,
  Umbrella,
  Landmark,
  UsersRound,
  BriefcaseBusiness,
  Heart,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TourCategories() {
  const sectionRef = useRef(null);

  const categories = [
    {
      icon: Mountain,
      title: "Adventure Tours",
      packages: "120 Packages",
      text: "Mountains, nature and exciting travel experiences.",
    },
    {
      icon: Umbrella,
      title: "Holiday Packages",
      packages: "85 Packages",
      text: "Relaxing trips for families and friends.",
    },
    {
      icon: Landmark,
      title: "Hajj & Umrah",
      packages: "45 Packages",
      text: "Reliable religious travel packages.",
    },
    {
      icon: UsersRound,
      title: "Family Tours",
      packages: "70 Packages",
      text: "Safe and comfortable family journeys.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Business Travel",
      packages: "55 Packages",
      text: "Professional travel plans for business trips.",
    },
    {
      icon: Heart,
      title: "Honeymoon Tours",
      packages: "35 Packages",
      text: "Romantic destinations and luxury packages.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".category-heading",
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

      gsap.utils.toArray(".category-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
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
      className="relative py-20 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="category-heading flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
              TOUR CATEGORIES
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              Choose Your Travel Style
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl leading-7">
              Select the tour type that matches your travel purpose and let us
              prepare the best package for you.
            </p>
          </div>

          <button className="w-fit px-7 py-4 rounded-full bg-[#000080] text-white font-bold flex items-center gap-3 hover:bg-orange-500 transition">
            View All Categories
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {categories.map((item) => (
            <div
              key={item.title}
              className="category-card group relative overflow-hidden rounded-[30px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl p-7 hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#000080]/10 group-hover:bg-orange-500/15 transition" />

              <div className="relative flex items-start gap-5">
                <div className="w-16 h-16 rounded-3xl bg-[#000080] text-white flex items-center justify-center group-hover:bg-orange-500 transition shadow-lg">
                  <item.icon size={32} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-bold text-orange-500">
                    {item.packages}
                  </p>

                  <p className="mt-4 text-slate-500 dark:text-slate-400 leading-7">
                    {item.text}
                  </p>
                </div>
              </div>

              <button className="relative mt-6 flex items-center gap-3 font-black text-[#000080] dark:text-orange-400 group-hover:text-orange-500 transition">
                Explore Category
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

export default TourCategories;