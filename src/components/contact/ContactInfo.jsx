import { useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactInfo() {
  const sectionRef = useRef(null);

  const infoCards = [
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      text: "+93 792 365 269",
      link: "tel:+93792365269",
      button: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Address",
      text: "arifroohany34@gmail.com",
      link: "mailto:arifroohany34@gmail.com",
      button: "Send Email",
    },
    {
      icon: MapPin,
      title: "Office Location",
      text: "Kabul, Afghanistan",
      link: "#",
      button: "Get Direction",
    },
    {
      icon: Clock3,
      title: "Working Hours",
      text: "Sat - Thu: 8:00 AM - 6:00 PM",
      link: "#",
      button: "View Time",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-info-heading",
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

      gsap.utils.toArray(".contact-info-card").forEach((card, index) => {
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
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="contact-info-heading text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <MessageCircle size={17} />
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Contact Our Travel Team
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Reach out to us for tickets, tours, visa services, hotel booking and
            complete travel support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {infoCards.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="contact-info-card group relative overflow-hidden rounded-[32px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl p-7 hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#000080]/10 group-hover:bg-orange-500/15 transition" />

              <div className="relative w-16 h-16 rounded-3xl bg-[#000080] text-white flex items-center justify-center group-hover:bg-orange-500 transition shadow-lg">
                <item.icon size={32} />
              </div>

              <h3 className="relative mt-7 text-2xl font-black text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="relative mt-3 text-slate-500 dark:text-slate-400 leading-7">
                {item.text}
              </p>

              <div className="relative mt-7 flex items-center gap-3 font-black text-[#000080] dark:text-orange-400 group-hover:text-orange-500 transition">
                {item.button}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;