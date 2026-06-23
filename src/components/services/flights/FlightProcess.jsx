import { useEffect, useRef } from "react";
import {
  BadgeCheck,
  CalendarCheck,
  CreditCard,
  FileText,
  Search,
  TicketCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlightProcess() {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Search Flight",
      text: "Choose your departure city, destination, travel date and passengers.",
      image: "/services/flights/process/search-flight.jpg",
      icon: Search,
    },
    {
      number: "02",
      title: "Choose Flight",
      text: "Compare available flight options and select the best route for you.",
      image: "/services/flights/process/choose-flight.jpg",
      icon: CalendarCheck,
    },
    {
      number: "03",
      title: "Complete Booking",
      text: "Submit your booking details and confirm your flight reservation.",
      image: "/services/flights/process/complete-booking.jpg",
      icon: CreditCard,
    },
    {
      number: "04",
      title: "Get E-Ticket",
      text: "Receive your electronic ticket and travel information quickly.",
      image: "/services/flights/process/e-ticket.jpg",
      icon: TicketCheck,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".flight-process-heading",
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

      gsap.utils.toArray(".flight-process-card").forEach((card, index) => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flight-process-heading text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <FileText size={17} />
            FLIGHT BOOKING PROCESS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Book Your Flight In{" "}
            <span className="text-orange-500">4 Easy Steps</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7 text-lg">
            From searching flights to receiving your e-ticket, we make the
            process simple, secure and fast.
          </p>

          <div className="mt-6 mx-auto w-28 h-1.5 rounded-full bg-gradient-to-r from-[#000080] to-orange-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flight-process-card group relative rounded-[30px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[230px] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/60 via-black/10 to-transparent" />

                <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center text-2xl font-black shadow-xl">
                  {step.number}
                </div>
              </div>

              <div className="relative px-6 pb-7 pt-12 text-center">
                <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-20 h-20 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
                    <step.icon size={30} />
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

        <div className="mt-14 rounded-[28px] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            "Best Flight Deals",
            "Secure Booking",
            "Fast Confirmation",
            "E-Ticket Delivery",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 xl:border-r last:border-r-0 border-slate-200 dark:border-slate-800 xl:pr-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center">
                <BadgeCheck size={26} />
              </div>

              <h4 className="font-black text-slate-900 dark:text-white">
                {item}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlightProcess;