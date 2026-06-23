import { useEffect, useRef } from "react";
import {
  BadgeCheck,
  Clock3,
  FileText,
  Headphones,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VisaProcess() {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      text: "Share your travel plans with our experts and get the best visa guidance.",
      image: "/services/visa/process/consultation.jpg",
      icon: Users,
    },
    {
      number: "02",
      title: "Document Review",
      text: "We review your documents carefully to ensure everything is in order.",
      image: "/services/visa/process/document-review.jpg",
      icon: FileText,
    },
    {
      number: "03",
      title: "Application Submission",
      text: "We submit your application to the appropriate embassy or consulate.",
      image: "/services/visa/process/application-submission.jpg",
      icon: Send,
    },
    {
      number: "04",
      title: "Visa Approval",
      text: "Once approved, we deliver your visa and you are ready to travel.",
      image: "/services/visa/process/visa-approval.jpg",
      icon: BadgeCheck,
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Expert Guidance",
      text: "Experienced visa consultants",
    },
    {
      icon: Clock3,
      title: "Fast Process",
      text: "Quick & efficient service",
    },
    {
      icon: BadgeCheck,
      title: "High Success Rate",
      text: "Maximum approval ratio",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      text: "We're here to help",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".visa-process-heading",
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

      gsap.utils.toArray(".visa-process-card").forEach((card, index) => {
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

      gsap.fromTo(
        ".visa-process-feature",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".visa-process-features",
            start: "top 90%",
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
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="visa-process-heading text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-orange-500/10 text-[#000080] dark:text-orange-400 font-black text-sm">
            <BadgeCheck size={17} />
            VISA APPLICATION PROCESS
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Simple Steps to Get Your{" "}
            <span className="text-[#2563eb] dark:text-orange-400">Visa</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7 text-lg">
            We make the visa application process easy, fast, and stress-free.
          </p>

          <div className="mt-6 mx-auto w-28 h-1.5 rounded-full bg-gradient-to-r from-[#000080] to-orange-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="visa-process-card group relative rounded-[30px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[230px] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/50 via-transparent to-transparent" />

                <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-[#000080] text-white flex items-center justify-center text-2xl font-black shadow-xl">
                  {step.number}
                </div>
              </div>

              <div className="relative px-6 pb-7 pt-12 text-center">
                <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-20 h-20 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-orange-500/10 text-[#2563eb] dark:text-orange-400 flex items-center justify-center">
                    <step.icon size={30} />
                  </div>
                </div>

                <p className="text-[#2563eb] dark:text-orange-400 font-black text-sm">
                  STEP {step.number}
                </p>

                <h3 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-500 dark:text-slate-400 leading-7">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="visa-process-features mt-14 rounded-[28px] bg-slate-50 dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="visa-process-feature flex items-center gap-4 xl:border-r last:border-r-0 border-slate-200 dark:border-slate-800 xl:pr-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-orange-500/10 text-[#2563eb] dark:text-orange-400 flex items-center justify-center">
                <item.icon size={27} />
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

export default VisaProcess;