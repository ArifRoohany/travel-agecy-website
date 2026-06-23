import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  FileCheck,
  Globe2,
  Headphones,
  Plane,
  ShieldCheck,
  Stamp,
  Users,
} from "lucide-react";
import gsap from "gsap";

function VisaHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".visa-hero-item", {
        opacity: 0,
        y: 45,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
      });

      gsap.from(".visa-hero-bg", {
        opacity: 0,
        x: 80,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(".visa-card", {
        opacity: 0,
        x: 55,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const visaTypes = [
    {
      icon: Stamp,
      title: "Tourist Visa",
      text: "Travel & vacation visa support",
    },
    {
      icon: Briefcase,
      title: "Business Visa",
      text: "Business travel documentation",
    },
    {
      icon: FileCheck,
      title: "Student Visa",
      text: "Study abroad visa guidance",
    },
  ];

  const stats = [
    {
      icon: Globe2,
      number: "50+",
      text: "Countries",
    },
    {
      icon: BadgeCheck,
      number: "10K+",
      text: "Visa Requests",
    },
    {
      icon: ShieldCheck,
      number: "99%",
      text: "Client Trust",
    },
    {
      icon: Users,
      number: "24/7",
      text: "Support",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[760px] pb-28 bg-white dark:bg-slate-950 overflow-hidden transition-colors"
    >
      <div className="absolute inset-0">
        <img
          src="/services/visa/visa-hero-bg.png"
          alt="Visa Services Hero"
          className="visa-hero-bg absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/15 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-10">
        <div className="visa-hero-item flex items-center gap-2 text-sm font-bold">
          <Link to="/" className="text-slate-600 dark:text-slate-300">
            Home
          </Link>
          <span className="text-slate-400">›</span>
          <span className="text-orange-500">Visa Services</span>
        </div>

        <div className="mt-20 max-w-2xl">
          <div className="visa-hero-item inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#000080] text-white font-black shadow-lg">
            <Stamp size={21} />
            VISA ASSISTANCE
          </div>

          <h1 className="visa-hero-item mt-7 text-5xl md:text-7xl font-black leading-tight text-slate-950 dark:text-white">
            Fast & Reliable
            <br />
            <span className="text-orange-500">Visa Services</span>
          </h1>

          <p className="visa-hero-item mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-xl">
            Get professional visa consultation, document preparation and
            application support for tourist, business and student visas.
          </p>

          <div className="visa-hero-item mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/booking"
              className="group px-7 py-4 rounded-2xl bg-orange-500 text-white font-black flex items-center gap-3 hover:bg-orange-600 transition shadow-xl"
            >
              Apply For Visa
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            <Link
              to="/contact"
              className="px-7 py-4 rounded-2xl border border-[#000080]/30 dark:border-white/30 text-[#000080] dark:text-white font-black flex items-center gap-3 hover:bg-[#000080] hover:text-white transition"
            >
              <Headphones size={21} />
              Contact Expert
            </Link>
          </div>

          <div className="visa-hero-item mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <Stamp size={25} />
              </div>
              <h3 className="font-black text-[#000080] dark:text-white">
                Tourist Visa
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <Briefcase size={25} />
              </div>
              <h3 className="font-black text-[#000080] dark:text-white">
                Business Visa
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <FileCheck size={25} />
              </div>
              <h3 className="font-black text-[#000080] dark:text-white">
                Student Visa
              </h3>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-[34%] top-[300px] w-[285px] rounded-[28px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-slate-100 dark:border-slate-800 p-5">
          {visaTypes.map((item, index) => (
            <div
              key={item.title}
              className={`visa-card flex items-center gap-4 py-4 ${
                index !== visaTypes.length - 1
                  ? "border-b border-slate-200 dark:border-slate-700"
                  : ""
              }`}
            >
              <div className="w-13 h-13 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <item.icon size={25} />
              </div>

              <div>
                <h4 className="font-black text-[#000080] dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Plane
          className="hidden lg:block absolute top-36 left-[45%] text-[#000080] dark:text-orange-400 rotate-12"
          size={44}
          fill="currentColor"
        />

        <div className="visa-hero-item relative mt-16 max-w-7xl mx-auto">
          <div className="rounded-[28px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 lg:border-r last:border-r-0 border-slate-200 dark:border-slate-800 lg:pr-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#000080] text-white flex items-center justify-center shadow-lg">
                  <item.icon size={30} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-orange-500">
                    {item.number}
                  </h3>
                  <p className="font-semibold text-slate-600 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisaHero;