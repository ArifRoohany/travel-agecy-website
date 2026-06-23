import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OfficeLocation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".office-animate",
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

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="office-animate text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <MapPin size={17} />
            OUR LOCATION
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Visit Our Office
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Come to our office or contact us online. Our travel experts are
            ready to help you plan your next journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-stretch">
          <div className="office-animate rounded-[36px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 p-8">
            <div className="w-18 h-18 rounded-[26px] bg-[#000080] dark:bg-orange-500 text-white flex items-center justify-center shadow-xl">
              <Navigation size={36} />
            </div>

            <h3 className="mt-6 text-3xl font-black text-slate-900 dark:text-white">
              Roohany Travel Office
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
              We provide professional travel services including flight booking,
              visa support, hotel reservation, Hajj & Umrah and tour packages.
            </p>

            <div className="mt-7 space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  text: "Kabul, Afghanistan",
                },
                {
                  icon: Phone,
                  title: "Phone / WhatsApp",
                  text: "+93 792 365 269",
                },
                {
                  icon: Mail,
                  title: "Email",
                  text: "arifroohany34@gmail.com",
                },
                {
                  icon: Clock3,
                  title: "Working Hours",
                  text: "Sat - Thu: 8:00 AM - 6:00 PM",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4"
                >
                  <div className="w-13 h-13 rounded-2xl bg-[#000080]/10 dark:bg-orange-500/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
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
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-7 w-full h-15 rounded-2xl bg-orange-500 text-white flex items-center justify-center gap-3 font-black hover:bg-orange-600 transition shadow-xl"
            >
              Get Direction
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="office-animate rounded-[36px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-slate-200 dark:bg-slate-900 min-h-[520px]">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Kabul%20Afghanistan&output=embed"
              className="w-full h-full min-h-[520px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeLocation;