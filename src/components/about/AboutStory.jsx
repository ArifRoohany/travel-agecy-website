import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Headphones,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutStory() {
  const sectionRef = useRef(null);

  const stats = [
    { icon: Users, number: "10K+", text: "Happy Travelers" },
    { icon: Globe2, number: "120+", text: "Destinations" },
    { icon: Headphones, number: "24/7", text: "Support" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-story-image",
        { opacity: 0, x: -80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-story-item",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-story-content",
            start: "top 80%",
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
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="about-story-image relative">
          <div className="absolute -left-6 -bottom-6 w-72 h-72 rounded-[36px] bg-[#000080] hidden md:block" />

          <div className="relative rounded-[36px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
            <img
  src="/about/about-story.jpg"
  alt="About AfghanTravel"
  className="w-full h-[620px] object-cover"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/65 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center">
                  <BadgeCheck size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-black">
                    Trusted Travel Agency
                  </h3>
                  <p className="text-white/80">
                    Serving travelers with honesty and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-story-content">
          <div className="about-story-item inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <ShieldCheck size={18} />
            WHO WE ARE
          </div>

          <h2 className="about-story-item mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            We Make Your Travel
            <br />
            <span className="text-orange-500">Simple & Comfortable</span>
          </h2>

          <p className="about-story-item mt-5 text-slate-600 dark:text-slate-400 leading-8 text-lg">
            AfghanTravel is a modern travel agency providing complete travel
            solutions for customers in Afghanistan. We help with flight booking,
            hotel reservations, visa assistance, Hajj & Umrah packages, and
            customized tours.
          </p>

          <div className="about-story-item mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="w-13 h-13 rounded-2xl bg-[#000080] text-white flex items-center justify-center">
                <Target size={26} />
              </div>

              <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                Our Mission
              </h3>

              <p className="mt-3 text-slate-500 dark:text-slate-400 leading-7">
                To make travel easier, safer and more affordable for every
                customer.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="w-13 h-13 rounded-2xl bg-orange-500 text-white flex items-center justify-center">
                <Globe2 size={26} />
              </div>

              <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                Our Vision
              </h3>

              <p className="mt-3 text-slate-500 dark:text-slate-400 leading-7">
                To become one of the most trusted travel agencies in
                Afghanistan.
              </p>
            </div>
          </div>

          <div className="about-story-item mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((item) => (
              <div
                key={item.text}
                className="rounded-3xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 p-5"
              >
                <item.icon className="text-[#000080] dark:text-orange-400" />
                <h3 className="mt-3 text-3xl font-black text-slate-900 dark:text-white">
                  {item.number}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-semibold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <button className="about-story-item mt-8 px-7 py-4 rounded-full bg-[#000080] text-white font-bold flex items-center gap-3 hover:bg-orange-500 transition">
            Learn More
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;