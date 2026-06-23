import { useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  CreditCard,
  MapPinned,
  Plane,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BookingSteps() {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      icon: MapPinned,
      title: "Choose Destination",
      text: "Select where you want to travel with our best destination options.",
    },
    {
      number: "02",
      icon: Plane,
      title: "Select Package",
      text: "Pick flights, hotels, tours or visa services based on your needs.",
    },
    {
      number: "03",
      icon: ClipboardList,
      title: "Fill Information",
      text: "Complete your booking details with traveler and contact information.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Confirm Booking",
      text: "Our team will confirm your request and guide you through the process.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".booking-steps-heading",
        { opacity: 0, y: 45 },
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

      gsap.utils.toArray(".booking-step-card").forEach((card, index) => {
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
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="booking-steps-heading text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <CreditCard size={17} />
            SIMPLE BOOKING PROCESS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Book Your Trip In 4 Easy Steps
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Our booking process is simple, fast and secure. Start your journey
            with confidence and let our team handle the details.
          </p>
        </div>

         <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="hidden xl:block absolute top-24 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#000080]/20 via-orange-500/50 to-[#000080]/20" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="booking-step-card group relative rounded-[34px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl p-7 hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute -top-5 right-7 text-6xl font-black text-[#000080]/5 dark:text-white/5">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-18 h-18 rounded-[26px] bg-[#000080] text-white flex items-center justify-center shadow-xl group-hover:bg-orange-500 transition">
                  <step.icon size={34} />
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-black">
                    Step {step.number}
                  </span>

                  <ArrowRight
                    size={22}
                    className="text-[#000080] dark:text-orange-400 group-hover:translate-x-1 transition"
                  />
                </div>

                <h3 className="mt-5 text-2xl font-black text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-500 dark:text-slate-400 leading-7">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;