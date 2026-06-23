import { useEffect, useRef } from "react";
import {
  Plane,
  Users,
  Headphones,
  ShieldCheck,
  BadgeCheck,
  Heart,
  Globe2,
  Mail,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurTeam() {
  const sectionRef = useRef(null);

  const team = [
    {
      name: "Fatima Noori",
      role: "Visa & Travel Consultant",
      image: "/team/member-1.jpg",
      icon: BadgeCheck,
      color: "bg-[#000080]",
    },
    {
      name: "Mohammad Arif",
      role: "Tour Manager",
      image: "/team/member-2.jpg",
      icon: Plane,
      color: "bg-orange-500",
    },
    {
      name: "Sara Azizi",
      role: "Customer Support",
      image: "/team/member-3.jpg",
      icon: Headphones,
      color: "bg-[#000080]",
    },
    {
      name: "Zainullah Khan",
      role: "Travel Operations",
      image: "/team/member-4.jpg",
      icon: Globe2,
      color: "bg-orange-500",
    },
  ];

  const bottomFeatures = [
    {
      icon: ShieldCheck,
      title: "Trusted & Reliable",
      text: "Your journey is safe with us",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      text: "We're always here to help",
    },
    {
      icon: BadgeCheck,
      title: "Best Price Guarantee",
      text: "Get the best for less",
    },
    {
      icon: Heart,
      title: "Customer First",
      text: "Your happiness is our mission",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-animate",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".founder-card",
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founder-card",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".member-card").forEach((card, index) => {
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="team-animate text-center max-w-4xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
            <Users size={18} />
            OUR TEAM
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Meet Our <span className="text-orange-500">Experts</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            The People Behind Your Perfect Journey
          </p>
        </div>

        {/* Founder Card */}
        <div className="founder-card relative rounded-[36px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-[#000080]">
          <img
            src="/team/founder.jpg"
            alt="Founder"
            className="w-full h-[430px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/95 via-[#000080]/70 to-transparent" />

          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-2xl">
            <p className="text-orange-400 text-2xl font-semibold italic">
              Founder & CEO
            </p>

            <h3 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Ahmad Rahimi
            </h3>

            <div className="mt-4 w-20 h-1 bg-orange-500 rounded-full" />

            <p className="mt-6 text-white/90 text-lg leading-8 max-w-xl">
              Travel is not just about visiting places, it is about creating
              memories that last forever.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: Plane, number: "10+", text: "Years Experience" },
                { icon: Users, number: "5000+", text: "Happy Clients" },
                { icon: Globe2, number: "120+", text: "Destinations" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center">
                    <item.icon size={25} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-white">
                      {item.number}
                    </h4>
                    <p className="text-sm text-white/80">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="member-card group rounded-[30px] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[270px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div
                  className={`absolute top-5 left-5 w-13 h-13 rounded-2xl ${member.color} text-white flex items-center justify-center shadow-lg`}
                >
                  <member.icon size={26} />
                </div>
              </div>

              <div className="relative p-6 text-center">
                <h3 className="text-2xl font-black text-[#000080] dark:text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-orange-500 font-bold">{member.role}</p>

                <div className="mt-5 flex items-center justify-center gap-3">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn, Mail].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-[#000080] dark:text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                      >
                        <Icon size={17} />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="team-animate mt-12 rounded-[28px] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {bottomFeatures.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 xl:border-r last:border-r-0 border-slate-200 dark:border-slate-800 xl:pr-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#000080]/10 dark:bg-orange-500/10 text-[#000080] dark:text-orange-400 flex items-center justify-center">
                <item.icon size={28} />
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
      </div>
    </section>
  );
}

export default OurTeam;