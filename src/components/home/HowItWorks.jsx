import { useEffect, useRef } from "react";
import {
  MapPinned,
  CalendarCheck,
  FileCheck2,
  PlaneTakeoff,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HowItWorks() {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      icon: MapPinned,
      title: "Choose Destination",
      text: "Select your favorite destination or travel package.",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Book Your Package",
      text: "Contact us and reserve your tour, flight or hotel.",
    },
    {
      number: "03",
      icon: FileCheck2,
      title: "Get Visa & Ticket",
      text: "We help you with visa, ticket and travel documents.",
    },
    {
      number: "04",
      icon: PlaneTakeoff,
      title: "Enjoy Your Travel",
      text: "Travel with comfort, confidence and full support.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-heading",
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

      gsap.utils.toArray(".work-step").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
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
      <div className="absolute top-16 left-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="work-heading text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Easy Steps To Start Your Journey
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400 leading-8">
            We make travel planning simple, fast and comfortable for every
            customer.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-[78px] left-[12%] right-[12%] h-[2px] bg-slate-200 dark:bg-slate-800" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="work-step relative bg-white dark:bg-slate-900 rounded-[30px] p-7 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute -top-5 right-7 text-6xl font-black text-slate-100 dark:text-slate-800">
                {step.number}
              </div>

              <div className="relative w-20 h-20 rounded-3xl bg-[#000080] text-white flex items-center justify-center shadow-xl">
                <step.icon size={34} />
              </div>

              <h3 className="mt-8 text-xl font-black text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-500 dark:text-slate-400 leading-7">
                {step.text}
              </p>

              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute top-[62px] -right-6 w-12 h-12 rounded-full bg-orange-500 text-white items-center justify-center shadow-lg z-10">
                  <ArrowRight size={22} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;