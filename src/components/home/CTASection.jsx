import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Briefcase,
  Phone,
  ShieldCheck,
  Headphones,
  Users,
  ThumbsUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CTASection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-item",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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

  const stats = [
    { icon: ShieldCheck, title: "Trusted", text: "Service" },
    { icon: Headphones, title: "24/7", text: "Support" },
    { icon: Users, title: "10K+", text: "Happy Clients" },
    { icon: ThumbsUp, title: "Best Price", text: "Guarantee" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative min-h-[380px] rounded-[40px] overflow-hidden shadow-2xl bg-[#000080]">
          <img
            src="/cta/cat-bg.png"
            alt="Travel CTA Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#000080]/20" />


          <div className="relative z-10 h-full px-6 py-12 md:px-16 text-center flex flex-col items-center justify-center">
<div className="cta-item inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-orange-500 text-white font-black shadow-lg">
  ✈ LET'S TRAVEL
</div>

            <h2 className="cta-item mt-6 text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl">
              Ready For Your Next{" "}
              <span className="text-orange-500">Adventure?</span>
            </h2>

            <p className="cta-item mt-5 text-white/90 text-lg leading-8 max-w-2xl">
              Let us help you plan your perfect journey with flights, hotels,
              tours and visa services. Your dream trip is just a click away!
            </p>

            <div className="cta-item mt-8 flex flex-wrap justify-center gap-5">
              <button className="group px-8 py-4 rounded-2xl bg-orange-500 text-white font-black flex items-center gap-3 hover:bg-orange-600 transition shadow-xl">
                <Briefcase size={22} />
                Book Your Trip
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>

              <button className="px-8 py-4 rounded-2xl border-2 border-white text-white font-black flex items-center gap-3 hover:bg-white hover:text-[#000080] transition">
                <Phone size={22} />
                Contact Us
              </button>
            </div>

            <div className="cta-item mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                    <item.icon size={23} />
                  </div>

                  <div className="text-left">
                    <h3 className="font-black">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;