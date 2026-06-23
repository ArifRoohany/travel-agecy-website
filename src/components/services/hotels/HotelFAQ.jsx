import { useEffect, useRef, useState } from "react";
import {
  BedDouble,
  ChevronDown,
  HelpCircle,
  Headphones,
  ShieldCheck,
  Star,
  WalletCards,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HotelFAQ() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How do I book a hotel?",
      answer:
        "You can choose your destination, check-in date, check-out date and room type. Then our team will confirm your booking quickly.",
    },
    {
      question: "Can I cancel my reservation?",
      answer:
        "Yes, cancellation depends on the hotel policy and room type. We will guide you before confirming the booking.",
    },
    {
      question: "Do hotels provide free breakfast?",
      answer:
        "Some hotels include free breakfast, while others offer it as an extra service. We will show you the available options.",
    },
    {
      question: "Can I book multiple rooms?",
      answer:
        "Yes, you can book multiple rooms for family, business groups or tour groups.",
    },
    {
      question: "How will I receive my booking confirmation?",
      answer:
        "After confirmation, your hotel booking details will be sent to you by WhatsApp or email.",
    },
    {
      question: "Do you offer luxury hotel options?",
      answer:
        "Yes, we provide luxury hotels, business hotels, family hotels and budget-friendly options.",
    },
  ];

  const supportItems = [
    {
      icon: WalletCards,
      title: "Best Hotel Prices",
      text: "Affordable hotel rates for every traveler.",
    },
    {
      icon: ShieldCheck,
      title: "Instant Confirmation",
      text: "Fast and secure booking confirmation.",
    },
    {
      icon: Star,
      title: "Trusted Hotels",
      text: "Top-rated hotels with quality service.",
    },
    {
      icon: Headphones,
      title: "24/7 Assistance",
      text: "Our team is ready to help anytime.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hotel-faq-heading", {
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

      gsap.from(".hotel-faq-left", {
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

      gsap.from(".hotel-faq-right", {
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
        <div className="hotel-faq-heading text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <HelpCircle size={18} />
            HOTEL QUESTIONS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Common Hotel Booking Questions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Find answers about hotel booking, rooms, cancellations,
            confirmations and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="hotel-faq-left space-y-4">
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

          <div className="hotel-faq-right">
            <div className="overflow-hidden rounded-[36px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                src="/services/hotels/hotel-faq-support.jpg"
                alt="Hotel Support"
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
                  <BedDouble size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">
                    Luxury Hotel Support
                  </h3>
                  <p className="text-white/75">
                    Book your perfect stay with confidence.
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

export default HotelFAQ;