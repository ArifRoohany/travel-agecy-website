import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  CheckCircle,
  Crown,
  Hotel,
  Plane,
  ShieldCheck,
  Star,
  Users,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HajjPackages() {
  const sectionRef = useRef(null);

  const packages = [
    {
      name: "Economy Umrah",
      price: "$1,250",
      tag: "Affordable",
      icon: Users,
      featured: false,
      features: [
        "Visa Included",
        "Round Trip Flight",
        "3 Star Hotel",
        "Airport Transfer",
        "Basic Guidance",
        "Group Support",
      ],
    },
    {
      name: "Standard Umrah",
      price: "$1,850",
      tag: "Most Popular",
      icon: Star,
      featured: true,
      features: [
        "Visa Included",
        "Round Trip Flight",
        "4 Star Hotel",
        "Airport Transfer",
        "Religious Guide",
        "Meals Included",
      ],
    },
    {
      name: "VIP Umrah",
      price: "$2,750",
      tag: "Premium",
      icon: Crown,
      featured: false,
      features: [
        "Visa Included",
        "Premium Flight",
        "5 Star Hotel",
        "Private Transfer",
        "Personal Guide",
        "VIP Support",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hajj-package-heading",
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

      gsap.utils.toArray(".hajj-package-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 55, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            delay: index * 0.1,
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
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="hajj-package-heading text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <BadgeCheck size={17} />
            HAJJ & UMRAH PACKAGES
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Choose Your Best{" "}
            <span className="text-orange-500">Spiritual Package</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7 text-lg">
            Select the package that fits your budget and travel needs. We handle
            visa, flights, hotels and full travel support.
          </p>

          <div className="mt-6 mx-auto w-28 h-1.5 rounded-full bg-gradient-to-r from-[#000080] to-orange-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`hajj-package-card relative rounded-[36px] border shadow-2xl overflow-hidden transition duration-500 hover:-translate-y-2 ${
                item.featured
                  ? "bg-[#000080] border-[#000080] lg:scale-105"
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
              }`}
            >
              {item.featured && (
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-orange-500 text-white font-black text-sm">
                  Best Choice
                </div>
              )}

              <div className="p-8">
                <div
                  className={`w-18 h-18 rounded-[26px] flex items-center justify-center shadow-xl ${
                    item.featured
                      ? "bg-orange-500 text-white"
                      : "bg-orange-100 dark:bg-orange-500/10 text-orange-500"
                  }`}
                >
                  <item.icon size={36} />
                </div>

                <p
                  className={`mt-6 font-black text-sm ${
                    item.featured
                      ? "text-orange-300"
                      : "text-orange-500"
                  }`}
                >
                  {item.tag}
                </p>

                <h3
                  className={`mt-3 text-3xl font-black ${
                    item.featured
                      ? "text-white"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {item.name}
                </h3>

                <div className="mt-5 flex items-end gap-2">
                  <h4
                    className={`text-5xl font-black ${
                      item.featured ? "text-white" : "text-orange-500"
                    }`}
                  >
                    {item.price}
                  </h4>
                  <span
                    className={`mb-2 ${
                      item.featured
                        ? "text-white/70"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    /person
                  </span>
                </div>

                <div
                  className={`my-7 h-px ${
                    item.featured
                      ? "bg-white/15"
                      : "bg-slate-200 dark:bg-slate-800"
                  }`}
                />

                <div className="space-y-4">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle
                        size={21}
                        className={
                          item.featured ? "text-orange-400" : "text-orange-500"
                        }
                      />
                      <span
                        className={`font-semibold ${
                          item.featured
                            ? "text-white/90"
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className={`mt-8 h-15 rounded-2xl flex items-center justify-center gap-3 font-black transition shadow-xl ${
                    item.featured
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-[#000080] text-white hover:bg-orange-500"
                  }`}
                >
                  Book Package
                  <ArrowRight size={19} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[28px] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { icon: Plane, title: "Flight Included" },
            { icon: Hotel, title: "Hotel Included" },
            { icon: ShieldCheck, title: "Visa Support" },
            { icon: Utensils, title: "Meal Options" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 xl:border-r last:border-r-0 border-slate-200 dark:border-slate-800 xl:pr-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center">
                <item.icon size={26} />
              </div>

              <h4 className="font-black text-slate-900 dark:text-white">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HajjPackages;