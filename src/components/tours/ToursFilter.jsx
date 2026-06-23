import { useEffect, useRef } from "react";
import {
  Search,
  MapPinned,
  CalendarDays,
  Tags,
  Star,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import gsap from "gsap";

function ToursFilter() {
  const filterRef = useRef(null);

  const filters = [
    { icon: Search, label: "Search Tour", value: "Tour name..." },
    { icon: MapPinned, label: "Destination", value: "All Destinations" },
    { icon: CalendarDays, label: "Duration", value: "Any Duration" },
    { icon: Tags, label: "Price Range", value: "Any Price" },
    { icon: SlidersHorizontal, label: "Tour Type", value: "All Types" },
    { icon: Star, label: "Rating", value: "Any Rating" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tours-filter-wrapper",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".tours-filter-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.25,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }, filterRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={filterRef} className="relative -mt-16 z-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="tours-filter-wrapper bg-white dark:bg-slate-900 rounded-[34px] shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {filters.map((item) => (
              <div
                key={item.label}
                className="tours-filter-item group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-4 hover:border-[#000080] dark:hover:border-orange-400 transition"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="text-[#000080] dark:text-orange-400" />

                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>

                    <h4 className="mt-1 font-black text-slate-900 dark:text-white">
                      {item.value}
                    </h4>
                  </div>

                  <ChevronDown
                    size={18}
                    className="text-slate-400 group-hover:text-orange-500 transition"
                  />
                </div>
              </div>
            ))}

            <button className="tours-filter-item xl:col-span-2 rounded-2xl bg-orange-500 text-white font-black flex items-center justify-center gap-3 py-5 hover:bg-orange-600 transition shadow-xl">
              <Search size={23} />
              Search Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToursFilter;