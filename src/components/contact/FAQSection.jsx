import { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FAQSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How can I book a tour package?",
      answer:
        "You can contact us through WhatsApp, phone, email, or fill out the contact form. Our team will guide you step by step.",
    },
    {
      question: "Do you provide visa services?",
      answer:
        "Yes, we provide visa assistance and document guidance for different travel destinations.",
    },
    {
      question: "Can I book flights and hotels with you?",
      answer:
        "Yes, we provide flight booking, hotel reservation, tour packages, and complete travel planning.",
    },
    {
      question: "Do you offer Hajj & Umrah packages?",
      answer:
        "Yes, we offer Hajj and Umrah packages with guidance, booking support, and travel arrangements.",
    },
    {
      question: "How fast do you respond?",
      answer:
        "We usually respond quickly during working hours, and WhatsApp support is available for urgent questions.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-animate",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="faq-animate text-center mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <HelpCircle size={17} />
            FAQ
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Find quick answers about our travel, visa, flight and tour services.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="faq-animate rounded-[26px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-black text-slate-900 dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition ${
                      isOpen
                        ? "bg-orange-500 text-white rotate-180"
                        : "bg-[#000080]/10 dark:bg-slate-800 text-[#000080] dark:text-orange-400"
                    }`}
                  >
                    <ChevronDown size={22} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;