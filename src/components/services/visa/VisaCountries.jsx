import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  FileText,
  Globe2,
  GraduationCap,
  Headphones,
  Landmark,
  ShieldCheck,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VisaCountries() {
  const sectionRef = useRef(null);

  const countries = [
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      image: "/services/visa/countries/uk.jpg",
types: [
  { icon: Plane, label: "Tourist" },
  { icon: Briefcase, label: "Business" },
  { icon: GraduationCap, label: "Study" },
]
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      image: "/services/visa/countries/germany.jpg",
types: [
  { icon: Plane, label: "Tourist" },
  { icon: Briefcase, label: "Business" },
  { icon: GraduationCap, label: "Study" },
]
    },
    {
      name: "Turkey",
      flag: "🇹🇷",
      image: "/services/visa/countries/turkey.jpg",
      types: [
        { icon: Plane, label: "Tourist" },
        { icon: Briefcase, label: "Business" },
      ],
    },
    {
      name: "UAE",
      flag: "🇦🇪",
      image: "/services/visa/countries/uae.jpg",
      types: [
        { icon: Plane, label: "Tourist" },
        { icon: Briefcase, label: "Business" },
      ],
    },
    {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      image: "/services/visa/countries/saudi.jpg",
      types: [
        { icon: Plane, label: "Tourist" },
        { icon: Landmark, label: "Umrah" },
      ],
    },
    {
      name: "Malaysia",
      flag: "🇲🇾",
      image: "/services/visa/countries/malaysia.jpg",
      types: [
        { icon: Plane, label: "Tourist" },
        { icon: Briefcase, label: "Business" },
      ],
    },
  ];

  const features = [
    {
      icon: Globe2,
      title: "Wide Coverage",
      text: "Visa support for 50+ countries",
    },
    {
      icon: FileText,
      title: "Simple Process",
      text: "Easy & hassle-free application",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      text: "100% secure document handling",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      text: "Dedicated support 24/7",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".visa-countries-heading",
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

      gsap.utils.toArray(".visa-country-card").forEach((card, index) => {
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

      gsap.fromTo(
        ".visa-country-feature",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".visa-country-features",
            start: "top 90%",
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
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="visa-countries-heading text-center max-w-4xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-orange-500/10 text-[#000080] dark:text-orange-400 font-black text-sm">
            <Globe2 size={17} />
            VISA COUNTRIES
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Explore Top{" "}
            <span className="text-[#2563eb] dark:text-orange-400">
              Countries
            </span>{" "}
            We Cover
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7 text-lg">
            We provide visa assistance for multiple countries worldwide.
          </p>

          <div className="mt-6 mx-auto w-28 h-1.5 rounded-full bg-gradient-to-r from-[#000080] to-orange-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="visa-country-card group rounded-[28px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/55 via-black/10 to-transparent" />
              </div>

              <div className="relative p-6">
                <div className="absolute -top-10 left-6 w-20 h-20 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-4xl">
                  {country.flag}
                </div>

                <div className="pt-8 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {country.name}
                  </h3>

                  <Link
                    to="/booking"
                    className="shrink-0 px-5 py-3 rounded-xl bg-[#000080] text-white font-black text-sm flex items-center gap-2 hover:bg-orange-500 transition"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {country.types.map((type) => (
                    <div
                      key={type.label}
                      className="flex items-center gap-2 rounded-full bg-blue-50 dark:bg-slate-800 px-3 py-2 text-sm font-bold text-slate-600 dark:text-slate-300"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#000080]/10 dark:bg-orange-500/10 text-[#2563eb] dark:text-orange-400 flex items-center justify-center">
                        <type.icon size={16} />
                      </span>
                      {type.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="visa-country-features mt-12 rounded-[28px] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="visa-country-feature flex items-center gap-4 xl:border-r last:border-r-0 border-slate-200 dark:border-slate-800 xl:pr-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2563eb] text-white flex items-center justify-center shadow-lg">
                <item.icon size={27} />
              </div>

              <div>
                <h4 className="font-black text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisaCountries;