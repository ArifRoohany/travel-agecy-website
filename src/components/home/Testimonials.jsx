import { useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageSquareQuote,
  ShieldCheck,
  Headphones,
  Users,
  Smile,
  Star,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

function Testimonials() {
  const sectionRef = useRef(null);

  const reviews = [
    {
      name: "Ahmad Rahimi",
      tour: "Dubai Luxury Trip",
      location: "Dubai, UAE",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "AfghanTravel made our Dubai trip absolutely amazing. Everything was well organized from flights to hotels. Highly recommended!",
    },
    {
      name: "Fatima Noori",
      tour: "Istanbul Family Tour",
      location: "Istanbul, Turkey",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Excellent visa support and hotel arrangements. The team was very friendly and responsive throughout the journey.",
    },
    {
      name: "Mohammad Arif",
      tour: "Bamyan Adventure",
      location: "Bamyan, Afghanistan",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "The Bamyan tour package exceeded our expectations. The places were beautiful and the service was top-notch!",
    },
    {
      name: "Sara Azizi",
      tour: "Malaysia Holiday",
      location: "Kuala Lumpur, Malaysia",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Very professional service. They helped us with tickets, hotel booking and complete travel planning.",
    },
  ];

  const stats = [
    {
      icon: ShieldCheck,
      number: "100%",
      title: "Trusted",
      text: "Licensed & Verified",
      color: "bg-blue-100 text-[#000080] dark:bg-blue-500/10",
    },
    {
      icon: Headphones,
      number: "24/7",
      title: "Support",
      text: "We're here to help",
      color: "bg-orange-100 text-orange-500 dark:bg-orange-500/10",
    },
    {
      icon: Users,
      number: "10K+",
      title: "Travelers",
      text: "Travel with confidence",
      color: "bg-blue-100 text-[#000080] dark:bg-blue-500/10",
    },
    {
      icon: Smile,
      number: "98%",
      title: "Satisfaction",
      text: "Our clients love us",
      color: "bg-orange-100 text-orange-500 dark:bg-orange-500/10",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-heading",
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

      gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".testimonial-stats",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-stats",
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
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#000080]/10 blur-3xl" />
      <div className="absolute top-28 right-0 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="testimonial-heading text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-orange-200 bg-orange-50 dark:bg-orange-500/10 text-orange-500 font-black text-sm">
            <MessageSquareQuote size={18} />
            WHAT OUR CLIENTS SAY
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Trusted by Travelers
            <br />
            <span className="text-orange-500">Loved by Thousands</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-8">
            We are proud to have helped thousands of travelers explore the world
            with comfort, safety, and unforgettable memories.
          </p>
        </div>

        <div className="relative mt-16">
          <button className="testimonial-prev hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white dark:bg-slate-900 text-[#000080] dark:text-orange-400 shadow-xl items-center justify-center hover:bg-orange-500 hover:text-white transition">
            <ChevronLeft size={28} />
          </button>

          <button className="testimonial-next hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white dark:bg-slate-900 text-[#000080] dark:text-orange-400 shadow-xl items-center justify-center hover:bg-orange-500 hover:text-white transition">
            <ChevronRight size={28} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={28}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            className="testimonial-swiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide className="p-5" key={review.name}>
                <div className="testimonial-card h-full rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-7">
                  <div className="flex items-center justify-between">
                    <MessageSquareQuote
                      size={42}
                      className="text-[#000080]"
                      fill="currentColor"
                    />

                    <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center">
                      <MessageSquareQuote
                        size={24}
                        className="text-orange-500"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  <p className="mt-7 text-slate-700 dark:text-slate-300 leading-8">
                    {review.text}
                  </p>

                  <div className="mt-6 flex text-orange-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <div className="my-7 h-px bg-slate-200 dark:bg-slate-800" />

                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">
                        {review.name}
                      </h3>

                      <p className="text-[#000080] dark:text-orange-400 font-bold">
                        {review.tour}
                      </p>

                      <p className="mt-1 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={14} />
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination mt-10 flex justify-center"></div>
        </div>

        <div className="testimonial-stats mt-16 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 lg:border-r last:border-r-0 border-slate-200 dark:border-slate-800 lg:pr-6"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                <item.icon size={32} />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {item.number} {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
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

export default Testimonials;