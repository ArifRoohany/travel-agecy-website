import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
  Briefcase,
  MapPin,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactForm() {
  const sectionRef = useRef(null);

  const quickItems = [
    {
      icon: Phone,
      title: "Call / WhatsApp",
      text: "+93 792 365 269",
      link: "tel:+93792365269",
    },
    {
      icon: Mail,
      title: "Email Us",
      text: "arifroohany34@gmail.com",
      link: "mailto:arifroohany34@gmail.com",
    },
    {
      icon: MapPin,
      title: "Office",
      text: "Kabul, Afghanistan",
      link: "#",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".form-animate",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
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

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div className="form-animate bg-white dark:bg-slate-900 rounded-[36px] shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <Send size={17} />
            SEND MESSAGE
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Get A Free Travel Consultation
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Fill out the form and our team will contact you as soon as possible.
          </p>

          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: User, type: "text", placeholder: "Your Name" },
              { icon: Mail, type: "email", placeholder: "Email Address" },
              { icon: Phone, type: "text", placeholder: "Phone Number" },
            ].map((field) => (
              <div key={field.placeholder} className="relative">
                <field.icon
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000080] dark:text-orange-400"
                  size={20}
                />
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition"
                />
              </div>
            ))}

            <div className="relative">
              <Briefcase
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000080] dark:text-orange-400"
                size={20}
              />
              <select className="w-full h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition">
                <option>Select Service</option>
                <option>Flight Booking</option>
                <option>Visa Services</option>
                <option>Hotel Reservation</option>
                <option>Tour Packages</option>
                <option>Hajj & Umrah</option>
              </select>
            </div>

            <textarea
              placeholder="Write your message..."
              rows="7"
              className="md:col-span-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition resize-none"
            />

            <button className="md:col-span-2 h-16 rounded-2xl bg-[#000080] text-white font-black flex items-center justify-center gap-3 hover:bg-orange-500 transition shadow-xl">
              Send Message
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        <div className="form-animate">
          <div className="relative overflow-hidden rounded-[36px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 p-8">
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#000080]/10 dark:bg-orange-500/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-orange-500/10 dark:bg-[#000080]/20 blur-2xl" />

            <div className="relative">
              <div className="w-18 h-18 rounded-[26px] bg-[#000080] dark:bg-orange-500 text-white flex items-center justify-center shadow-xl">
                <MessageCircle size={36} />
              </div>

              <h3 className="mt-6 text-3xl font-black text-slate-900 dark:text-white">
                Need Quick Help?
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
                Our travel experts are ready to help you with tours, tickets,
                visas and hotel reservations.
              </p>

              <div className="mt-7 space-y-4">
                {quickItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="group flex items-center gap-4 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 hover:border-orange-500 transition"
                  >
                    <div className="w-13 h-13 rounded-2xl bg-[#000080]/10 dark:bg-orange-500/10 text-[#000080] dark:text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition">
                      <item.icon size={24} />
                    </div>

                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/93792365269"
                target="_blank"
                rel="noreferrer"
                className="mt-7 w-full h-15 rounded-2xl bg-orange-500 text-white flex items-center justify-center gap-3 font-black hover:bg-orange-600 transition shadow-xl"
              >
                <Phone size={20} />
                WhatsApp Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;