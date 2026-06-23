import { useEffect, useRef } from "react";
import {
  BadgeCheck,
  FileText,
  Headphones,
  Hotel,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HajjProcess() {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      text: "Meet our experts and choose the best Hajj or Umrah package.",
      image: "/services/hajj/process/consultation.jpg",
      icon: Users,
    },
    {
      number: "02",
      title: "Visa Processing",
      text: "We prepare and process all visa requirements for your journey.",
      image: "/services/hajj/process/visa-processing.jpg",
      icon: FileText,
    },
    {
      number: "03",
      title: "Flight & Hotel Booking",
      text: "Flights, hotels and transportation are arranged for you.",
      image: "/services/hajj/process/flight-hotel-booking.jpg",
      icon: Plane,
    },
    {
      number: "04",
      title: "Travel to Makkah & Madinah",
      text: "Begin your spiritual journey with complete travel support.",
      image: "/services/hajj/process/makkah-madinah-travel.jpg",
      icon: Headphones,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hajj-process-heading",
        { opacity: 0, y: 40 },
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

      gsap.utils.toArray(".hajj-process-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
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
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="hajj-process-heading text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-500 font-black text-sm">
            <BadgeCheck size={18} />
            HAJJ & UMRAH PROCESS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Your Journey In
            <span className="text-orange-500"> 4 Easy Steps</span>
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400 text-lg">
            We handle everything from consultation to arrival in Makkah and
            Madinah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="hajj-process-card group bg-white dark:bg-slate-900 rounded-[30px] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/70 via-transparent to-transparent" />

                <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center text-xl font-black">
                  {step.number}
                </div>
              </div>

              <div className="relative px-6 pb-7 pt-12 text-center">
                <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-20 h-20 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
                    <step.icon size={28} />
                  </div>
                </div>

                <p className="text-orange-500 font-black text-sm">
                  STEP {step.number}
                </p>

                <h3 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-500 dark:text-slate-400 leading-7">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[28px] bg-slate-50 dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Visa Support",
            },
            {
              icon: Plane,
              title: "Flight Booking",
            },
            {
              icon: Hotel,
              title: "Hotel Reservation",
            },
            {
              icon: Headphones,
              title: "24/7 Guidance",
            },
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

export default HajjProcess;