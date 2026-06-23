import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Plane,
  ShieldCheck,
  Tag,
  Users,
  BriefcaseBusiness,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhyChooseUs() {
  const sectionRef = useRef(null);

  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted & Reliable",
      text: "10+ years of experience in travel and tourism industry.",
      color: "bg-orange-500",
    },
    {
      icon: Tag,
      title: "Best Price Guarantee",
      text: "We offer the most competitive prices with no hidden fees.",
      color: "bg-[#000080]",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      text: "Our support team is always ready to help you.",
      color: "bg-orange-500",
    },
    {
      icon: Plane,
      title: "Complete Travel Services",
      text: "Flights, hotels, visa, tours and transfers — all in one place.",
      color: "bg-[#000080]",
    },
    {
      icon: Users,
      title: "Expert Travel Agents",
      text: "Professional agents to plan your perfect trip.",
      color: "bg-orange-500",
    },
    {
      icon: BadgeCheck,
      title: "Safe & Secure Booking",
      text: "Your booking and data are 100% safe with us.",
      color: "bg-[#000080]",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-left-item",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-left",
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".why-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 55, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
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

      gsap.fromTo(
        ".why-image-box",
        { opacity: 0, x: 90, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-image-box",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".floating-stat").forEach((stat, index) => {
        gsap.fromTo(
          stat,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.35 + index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ".why-image-box",
              start: "top 75%",
              once: true,
            },
          }
        );

        gsap.to(stat, {
          y: -12,
          duration: 2.3 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors"
    >
      <div className="absolute top-10 right-10 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 grid grid-cols-6 gap-2 opacity-40">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="why-left">
          <div className="why-left-item inline-flex items-center gap-2 text-orange-500 font-black">
            <Plane size={20} />
            WHY CHOOSE US
          </div>

          <h2 className="why-left-item mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Travel With Confidence,
            <br />
            We Handle{" "}
            <span className="text-orange-500 italic">Everything</span>
          </h2>

          <p className="why-left-item mt-6 text-lg text-slate-600 dark:text-slate-400 leading-8 max-w-2xl">
            AfghanTravel is your trusted travel partner in Afghanistan. We
            provide complete travel solutions with the best service, support and
            value.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {features.map((item) => (
              <div
                key={item.title}
                className="why-card group p-6 rounded-[26px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg`}
                >
                  <item.icon size={27} />
                </div>

                <h3 className="mt-5 text-lg font-black text-[#000080] dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="why-left-item mt-10 flex flex-wrap items-center gap-8">
            <button className="group h-[62px] pl-8 pr-3 rounded-full bg-[#000080] text-white font-bold flex items-center gap-5 shadow-xl hover:bg-orange-500 transition">
              Discover More
              <span className="w-11 h-11 rounded-full bg-white text-[#000080] flex items-center justify-center group-hover:translate-x-1 transition">
                <ArrowRight size={20} />
              </span>
            </button>

            <div>
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/46.jpg",
                  "https://randomuser.me/api/portraits/women/65.jpg",
                ].map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt="Traveler"
                    className="w-11 h-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <div className="mt-2 flex items-center gap-3">
                <span className="font-black text-[#000080] dark:text-white">
                  5K+ Happy Travelers
                </span>

                <div className="flex text-orange-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="why-image-box relative">
          <div className="absolute -right-8 -bottom-8 w-72 h-72 rounded-[36px] bg-[#000080] hidden md:block" />

          <div className="relative rounded-[36px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=90"
              alt="Traveler looking at mountains"
              className="w-full h-[680px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/45 via-transparent to-transparent" />
          </div>

          <div className="floating-stat absolute top-16 left-8 bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center">
                <Plane size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#000080] dark:text-white">
                  120+
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-semibold">
                  Destinations Worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="floating-stat absolute top-1/2 -left-10 bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-100 dark:border-slate-800 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#000080] dark:text-white">
                  5K+
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-semibold">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          <div className="floating-stat absolute bottom-20 -right-5 bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-2xl border border-slate-100 dark:border-slate-800 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center">
                <BriefcaseBusiness size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#000080] dark:text-white">
                  15K+
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-semibold">
                  Trips Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;