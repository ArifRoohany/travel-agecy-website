import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Headphones,
  Hotel,
  Plane,
  ShieldCheck,
  FileText,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HajjFAQ() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is included in the Umrah package?",
      answer:
        "Our packages can include visa support, round trip flights, hotel booking, airport transfer and full travel guidance.",
    },
    {
      question: "How long does Umrah visa processing take?",
      answer:
        "Processing time depends on the season and requirements, but our team will guide you step by step until completion.",
    },
    {
      question: "Do you provide hotel booking in Makkah and Madinah?",
      answer:
        "Yes, we provide hotel options near the holy places based on your budget and package type.",
    },
    {
      question: "Can families travel together?",
      answer:
        "Yes, we arrange family and group packages with suitable hotel rooms, transport and guidance.",
    },
    {
      question: "Do you provide airport transfer?",
      answer:
        "Yes, airport pickup and transport between Makkah and Madinah can be included in your package.",
    },
    {
      question: "How can I book a package?",
      answer:
        "You can contact us through WhatsApp or the booking form. Our team will explain the available packages.",
    },
  ];

  const supportItems = [
    { icon: FileText, title: "Visa Assistance", text: "Complete visa support." },
    { icon: Hotel, title: "Makkah & Madinah Hotels", text: "Comfortable stays." },
    { icon: Plane, title: "Flight & Transport", text: "Travel made simple." },
    { icon: Headphones, title: "24/7 Guidance", text: "Support anytime." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hajj-faq-heading", {
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

      gsap.from(".hajj-faq-left", {
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

      gsap.from(".hajj-faq-right", {
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
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="hajj-faq-heading text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <HelpCircle size={18} />
            HAJJ & UMRAH QUESTIONS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Common Hajj & Umrah Questions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Find answers about packages, visa, hotels, flights and full travel
            support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="hajj-faq-left space-y-4">
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

          <div className="hajj-faq-right">
            <div className="overflow-hidden rounded-[36px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                src="/services/hajj/hajj-faq-support.jpg"
                alt="Hajj and Umrah Support"
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

            <div className="mt-6 rounded-[28px] bg-[#000080] dark:bg-slate-900 p-6 shadow-xl border border-[#000080]/20 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">
                    Hajj & Umrah Support
                  </h3>
                  <p className="text-white/75">
                    Your spiritual journey, our responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HajjFAQ;