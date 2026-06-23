import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Headphones,
  Plane,
  ShieldCheck,
  TicketCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlightFAQ() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How early should I arrive at the airport?",
      answer:
        "For international flights, it is better to arrive at least 3 hours before departure. For domestic flights, 1.5 to 2 hours is usually enough.",
    },
    {
      question: "Can I change my flight after booking?",
      answer:
        "Yes, flight changes depend on airline rules and ticket type. Our team can help you check available options.",
    },
    {
      question: "Do you offer refundable tickets?",
      answer:
        "Yes, some airlines provide refundable tickets. We can help you choose the best ticket based on your travel needs.",
    },
    {
      question: "How will I receive my e-ticket?",
      answer:
        "After confirmation, your e-ticket will be sent to you by email or WhatsApp.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, bank transfer, and other available payment methods depending on your location.",
    },
    {
      question: "Can you help with baggage information?",
      answer:
        "Yes, we provide baggage allowance details based on your airline and ticket class.",
    },
  ];

  const supportItems = [
    {
      icon: Headphones,
      title: "24/7 Flight Support",
      text: "We help you before and after booking.",
    },
    {
      icon: TicketCheck,
      title: "Instant Confirmation",
      text: "Receive your ticket quickly.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Airlines",
      text: "We work with reliable flight options.",
    },
    {
      icon: Plane,
      title: "Best Ticket Prices",
      text: "Affordable routes for every traveler.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".flight-faq-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".flight-faq-left", {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".flight-faq-right", {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
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
        <div className="flight-faq-heading text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <HelpCircle size={18} />
            FLIGHT QUESTIONS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Common Flight Booking Questions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Find answers to the most common questions about flight booking,
            tickets, payments and travel support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flight-faq-left space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-5 p-6 text-left"
                >
                  <h3 className="font-black text-lg text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`shrink-0 text-orange-500 transition duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeIndex === index
                      ? "max-h-40 px-6 pb-6"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flight-faq-right">
            <div className="overflow-hidden rounded-[36px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                src="/services/flights/flight-faq-support.jpg"
                alt="Flight Support"
                className="w-full h-[420px] object-cover"
              />

              <div className="p-7 space-y-5">
                {supportItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 last:border-none"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#000080]/10 dark:bg-orange-500/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                      <item.icon size={24} />
                    </div>

                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="text-slate-500 dark:text-slate-400 mt-1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlightFAQ;