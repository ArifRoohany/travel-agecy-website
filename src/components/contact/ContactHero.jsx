import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Headphones,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";

function ContactHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        opacity: 0,
        y: 45,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".contact-bg", {
        opacity: 0,
        x: 80,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[560px] bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/contact/contact-hero-bg.png"
          alt="Contact Hero"
          className="contact-bg absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/15 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-16">
        {/* Breadcrumb */}
        <div className="contact-item flex items-center gap-2 text-sm font-bold">
          <Link to="/" className="text-slate-600 dark:text-slate-300">
            Home
          </Link>

          <span className="text-slate-400">›</span>

          <span className="text-orange-500">
            Contact Us
          </span>
        </div>

        <div className="mt-20 max-w-2xl">
          <div className="contact-item inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#000080] text-white font-black shadow-lg">
            <Headphones size={20} />
            CONTACT US
          </div>

          <h1 className="contact-item mt-7 text-5xl md:text-7xl font-black leading-tight text-slate-900 dark:text-white">
            Let's Start Your
            <br />
            <span className="text-orange-500">
              Next Journey
            </span>
          </h1>

          <p className="contact-item mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-xl">
            Have questions about tours, flights,
            visa services or travel packages?
            Our team is ready to help.
          </p>

          <div className="contact-item mt-8 flex flex-wrap gap-5">
            <a
              href="tel:+93792365269"
              className="group px-7 py-4 rounded-2xl bg-orange-500 text-white font-black flex items-center gap-3 hover:bg-orange-600 transition shadow-xl"
            >
              <Phone size={20} />
              Call Us

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </a>

            <a
              href="mailto:arifroohany34@gmail.com"
              className="px-7 py-4 rounded-2xl border border-[#000080]/30 dark:border-white/30 text-[#000080] dark:text-white font-black flex items-center gap-3 hover:bg-[#000080] hover:text-white transition"
            >
              <Mail size={20} />
              Send Message
            </a>
          </div>

          <div className="contact-item mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 flex items-center justify-center text-[#000080] dark:text-orange-400">
                <Clock3 size={24} />
              </div>

              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  24/7 Support
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Always Available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 flex items-center justify-center text-[#000080] dark:text-orange-400">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  Trusted Service
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Safe & Reliable
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#000080]/10 dark:bg-white/10 flex items-center justify-center text-[#000080] dark:text-orange-400">
                <Headphones size={24} />
              </div>

              <div>
                <h3 className="font-black text-[#000080] dark:text-white">
                  Fast Response
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Quick Assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;