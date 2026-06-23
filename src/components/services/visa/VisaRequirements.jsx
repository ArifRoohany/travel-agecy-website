import { useEffect, useRef } from "react";
import { ArrowRight, FileCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VisaRequirements() {
  const sectionRef = useRef(null);

  const requirements = [
    {
      number: "01",
      title: "Valid Passport",
      text: "Passport must be valid for at least 6 months from the travel date.",
      image: "/services/visa/requirements/passport.jpg",
    },
    {
      number: "02",
      title: "National ID",
      text: "National ID card or Tazkira copy is required.",
      image: "/services/visa/requirements/national-id.jpg",
    },
    {
      number: "03",
      title: "Passport Photos",
      text: "Recent passport-size photos with white background.",
      image: "/services/visa/requirements/passport-photos.jpg",
    },
    {
      number: "04",
      title: "Bank Statement",
      text: "Proof of financial support and sufficient balance.",
      image: "/services/visa/requirements/bank-statement.jpg",
    },
    {
      number: "05",
      title: "Invitation Letter",
      text: "Required for some tourist and business visas.",
      image: "/services/visa/requirements/invitation-letter.jpg",
    },
    {
      number: "06",
      title: "Travel Insurance",
      text: "Valid travel insurance for the entire duration of your stay.",
      image: "/services/visa/requirements/travel-insurance.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".visa-req-heading",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".visa-req-card").forEach((card, index) => {
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
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="visa-req-heading text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-orange-500/10 text-[#000080] dark:text-orange-400 font-black text-sm">
            <FileCheck size={17} />
            VISA REQUIREMENTS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Required Documents
            <br />
            <span className="text-[#2563eb] dark:text-orange-400">
              For Visa Application
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
            Please make sure you have the following documents ready before
            starting your visa application process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {requirements.map((item) => (
            <div
              key={item.number}
              className="visa-req-card group rounded-[26px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[230px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex items-start gap-5">
                <div className="min-w-12 h-12 rounded-2xl bg-blue-100 dark:bg-orange-500/10 text-[#2563eb] dark:text-orange-400 flex items-center justify-center font-black">
                  {item.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-500 dark:text-slate-400 leading-7">
                    {item.text}
                  </p>
                </div>

                <button className="mt-2 text-slate-500 dark:text-slate-400 group-hover:text-orange-500 transition">
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisaRequirements;