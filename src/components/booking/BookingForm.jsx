import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Headphones,
  Mail,
  MapPinned,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Star,
  User,
  Users,
  WalletCards,
  MessageSquare,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BookingForm() {
  const sectionRef = useRef(null);

  const benefits = [
    { icon: ShieldCheck, title: "Secure Booking" },
    { icon: Headphones, title: "24/7 Support" },
    { icon: BadgeCheck, title: "Fast Confirmation" },
    { icon: WalletCards, title: "Best Price" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".booking-form-animate",
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
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div className="booking-form-animate rounded-[36px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <Send size={17} />
            BOOKING FORM
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Book Your Trip Now
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Fill in your travel details and our team will contact you to confirm
            your booking.
          </p>

          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: User, type: "text", placeholder: "Full Name" },
              { icon: Mail, type: "email", placeholder: "Email Address" },
              { icon: Phone, type: "text", placeholder: "Phone Number" },
              { icon: MapPinned, type: "text", placeholder: "Destination" },
              { icon: CalendarDays, type: "date", placeholder: "Travel Date" },
              { icon: Users, type: "number", placeholder: "Travelers" },
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

            <div className="relative md:col-span-2">
              <Plane
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#000080] dark:text-orange-400"
                size={20}
              />
              <select className="w-full h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition">
                <option>Select Service Type</option>
                <option>Flight Booking</option>
                <option>Hotel Reservation</option>
                <option>Tour Package</option>
                <option>Visa Services</option>
                <option>Hajj & Umrah</option>
              </select>
            </div>

            <div className="relative md:col-span-2">
              <MessageSquare
                className="absolute left-5 top-5 text-[#000080] dark:text-orange-400"
                size={20}
              />
              <textarea
                placeholder="Special request..."
                rows="7"
                className="w-full rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-14 pr-5 py-5 outline-none text-slate-900 dark:text-white focus:border-orange-500 transition resize-none"
              />
            </div>

            <button className="md:col-span-2 h-16 rounded-2xl bg-[#000080] text-white font-black flex items-center justify-center gap-3 hover:bg-orange-500 transition shadow-xl">
              Submit Booking
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        <div className="booking-form-animate">
          <div className="relative overflow-hidden rounded-[36px] bg-[#000080] dark:bg-slate-900 shadow-2xl border border-[#000080]/20 dark:border-slate-800 p-8">
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-orange-500/20 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-white/10 dark:bg-orange-500/10 blur-2xl" />

            <div className="relative">
              <div className="w-18 h-18 rounded-[26px] bg-orange-500 text-white flex items-center justify-center shadow-xl">
                <Plane size={36} />
              </div>

              <h3 className="mt-6 text-3xl font-black text-white">
                Why Book With Us?
              </h3>

              <p className="mt-4 text-white/80 leading-7">
                We make your booking simple, secure and stress-free with full
                support from our travel experts.
              </p>

              <div className="mt-7 grid gap-4">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 dark:bg-white/5 p-4 text-white"
                  >
                    <item.icon className="text-orange-400" size={23} />
                    <span className="font-bold">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <h4 className="text-3xl font-black text-orange-400">
                    10K+
                  </h4>
                  <p className="text-white/75 font-semibold">
                    Happy Travelers
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <h4 className="text-3xl font-black text-orange-400">
                    99%
                  </h4>
                  <p className="text-white/75 font-semibold">
                    Satisfaction
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/93792365269"
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full h-15 rounded-2xl bg-orange-500 text-white flex items-center justify-center gap-3 font-black hover:bg-orange-600 transition shadow-xl"
              >
                <Phone size={20} />
                Need Help? WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;