import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Headphones,
  ShieldCheck,
  Send,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VisaFAQ() {
  const sectionRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How long does visa processing take?",
      answer:
        "Visa processing time depends on the destination country and visa type. Most tourist visas are processed within a few working days, while study and immigration visas may take longer.",
    },
    {
      question: "What documents are required for a visa?",
      answer:
        "Typically you need a valid passport, photographs, application form, financial proof, travel itinerary and supporting documents depending on the country.",
    },
    {
      question: "Can you help if my visa was rejected before?",
      answer:
        "Yes. Our experts review previous rejection reasons and help prepare a stronger application for better approval chances.",
    },
    {
      question: "Do I need an interview for my visa application?",
      answer:
        "Some countries require interviews while others do not. We guide you through the complete interview preparation process.",
    },
    {
      question: "How can I track my visa application status?",
      answer:
        "We keep you updated throughout the process and help track your application status with the relevant authorities.",
    },
    {
      question: "Do you provide urgent visa services?",
      answer:
        "Yes. For selected countries we provide priority and urgent visa processing options whenever available.",
    },
  ];

  const supportItems = [
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      text: "We're here to help you anytime.",
    },
    {
      icon: ShieldCheck,
      title: "Expert Visa Guidance",
      text: "Professional consultation from experts.",
    },
    {
      icon: Send,
      title: "Fast & Reliable Service",
      text: "Quick processing with high success rates.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".faq-left", {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".faq-right", {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
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
        <div className="faq-heading text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-orange-500/10 text-[#000080] dark:text-orange-400 font-black text-sm">
            <HelpCircle size={18} />
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Common Visa Questions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Find answers to the most common questions about our visa services
            and application process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* FAQ Left */}
          <div className="faq-left space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-black text-lg text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition duration-300 ${
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

          {/* Right Side */}
          <div className="faq-right">
            <div className="overflow-hidden rounded-[36px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                src="/services/visa/faq-support.jpg"
                alt="Visa Support"
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

export default VisaFAQ;