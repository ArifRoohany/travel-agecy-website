import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe2,
  Headphones,
  ShieldCheck,
  Star,
  Plane,
} from "lucide-react";
import gsap from "gsap";

function DestinationsHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dest-hero-item", {
        opacity: 0,
        y: 45,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".dest-hero-bg", {
        opacity: 0,
        x: 80,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[560px] bg-white dark:bg-slate-950 overflow-hidden transition-colors"
    >
      <div className="absolute inset-0">
        <img
          src="/destinations/destinations-hero-bg.png"
          alt="Destinations Hero"
          className="dest-hero-bg absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-16">
        <div className="dest-hero-item flex items-center gap-2 text-sm font-bold">
          <Link to="/" className="text-slate-600 dark:text-slate-300">
            Home
          </Link>
          <span className="text-slate-400">›</span>
          <span className="text-orange-500">Destinations</span>
        </div>

        <div className="mt-20 max-w-2xl">
          <div className="dest-hero-item inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#000080] text-white font-black shadow-lg">
            <Globe2 size={21} />
            TOP DESTINATIONS
          </div>

          <h1 className="dest-hero-item mt-7 text-5xl md:text-7xl font-black leading-tight text-slate-950 dark:text-white">
            Explore Amazing
            <br />
            <span className="text-orange-500">Destinations</span>
          </h1>

          <p className="dest-hero-item mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-xl">
            Discover handpicked destinations around the world with trusted
            travel services and unforgettable trips.
          </p>

          <div className="dest-hero-item mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/tours"
              className="group px-7 py-4 rounded-2xl bg-orange-500 text-white font-black flex items-center gap-3 hover:bg-orange-600 transition shadow-xl"
            >
              Explore Tours
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
              Contact Us
            </Link>
          </div>

          <div className="dest-hero-item mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <ShieldCheck size={25} />
              </div>
              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  Best Price
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Guarantee
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <Headphones size={25} />
              </div>
              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  24/7 Support
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  We’re Here
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <Star size={25} />
              </div>
              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  Trusted by
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  10K+ Travelers
                </p>
              </div>
            </div>
          </div>
        </div>

        <Plane
          className="hidden lg:block absolute top-36 left-[45%] text-[#000080] dark:text-orange-400 rotate-12"
          size={44}
          fill="currentColor"
        />
      </div>
    </section>
  );
}

export default DestinationsHero;