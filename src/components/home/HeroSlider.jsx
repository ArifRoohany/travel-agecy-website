import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import {
  Plane,
  Play,
  ArrowRight,
  Search,
  Hotel,
  Palmtree,
  CalendarDays,
  Users,
  Repeat2,
  Stamp,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function HeroSlider() {
  const slides = [
    {
      badge: "DISCOVER THE WORLD",
      title1: "Explore The World",
      title2: "With AfghanTravel",
      description:
        "We make your travel easier, more comfortable and memorable. Discover amazing places with the best travel services in Afghanistan.",
      button: "Explore Tours",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1900&q=90",
    },
    {
      badge: "BEST TOUR PACKAGES",
      title1: "Discover Amazing",
      title2: "Destinations",
      description:
        "Enjoy unforgettable tours, beautiful destinations, and professional travel services for families, businesses, and adventure lovers.",
      button: "View Packages",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1900&q=90",
    },
    {
      badge: "TRAVEL WITH CONFIDENCE",
      title1: "Your Journey",
      title2: "Starts Here",
      description:
        "Book flights, hotels, visas and complete travel packages with a trusted travel agency in Afghanistan.",
      button: "Book Now",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1900&q=90",
    },
  ];

  const animateSlide = () => {
    gsap.fromTo(
      ".hero-badge",
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 45 },
      { opacity: 1, y: 0, duration: 0.9, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 45 },
      { opacity: 1, y: 0, duration: 0.9, delay: 0.55, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 45 },
      { opacity: 1, y: 0, duration: 0.9, delay: 0.8, ease: "power3.out" }
    );
  };

  const features = [
    {
      icon: ShieldCheck,
      title: "Best Price Guarantee",
      text: "We offer the best prices",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      text: "Our team is always here",
    },
    {
      icon: BriefcaseBusiness,
      title: "Handpicked Tours",
      text: "Best tours & experiences",
    },
    {
      icon: BadgeCheck,
      title: "Trusted Agency",
      text: "100% customer satisfaction",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="relative">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop={true}
          speed={1200}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onInit={animateSlide}
          onSlideChangeTransitionStart={animateSlide}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative min-h-[760px]">
                <img
                  src={slide.image}
                  alt={slide.title1}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/95 via-[#000080]/72 to-[#000080]/30" />
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-44">
                  <div className="max-w-5xl">
                    <div className="hero-badge inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md text-white font-semibold">
                      <span className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center">
                        <Plane size={18} />
                      </span>
                      {slide.badge}
                    </div>

                    <h1 className="hero-title mt-7 text-[44px] sm:text-[56px] md:text-[72px] lg:text-[82px] font-black text-white leading-[1.08] tracking-tight">
                      {slide.title1} <br />
                      <span>
                        {slide.title2.includes("AfghanTravel") ? (
                          <>
                            With Afghan
                            <span className="text-orange-500">Travel</span>
                          </>
                        ) : (
                          <span className="text-orange-500">{slide.title2}</span>
                        )}
                      </span>
                    </h1>

                    <p className="hero-description mt-6 text-lg text-white/90 max-w-[620px] leading-8">
                      {slide.description}
                    </p>

                    <div className="hero-buttons mt-9 flex flex-wrap items-center gap-6">
                      <button className="group h-[62px] pl-8 pr-3 rounded-full bg-[#000080] text-white font-bold border border-white/20 shadow-xl flex items-center gap-5 hover:bg-orange-500 transition">
                        {slide.button}
                        <span className="w-11 h-11 rounded-full bg-white text-[#000080] flex items-center justify-center group-hover:translate-x-1 transition">
                          <ArrowRight size={20} />
                        </span>
                      </button>

                      <button className="w-[58px] h-[58px] rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-[#000080] transition">
                        <Play size={22} fill="currentColor" />
                      </button>

                      <span className="text-white font-bold text-lg">
                        Watch Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Search Box */}
        <div className="absolute left-6 right-6 -bottom-[108px] z-20 max-w-7xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-[24px] shadow-2xl p-6">
            <div className="flex flex-wrap items-center gap-5 mb-6">
              <button className="px-7 py-4 rounded-xl bg-[#000080] text-white font-bold flex items-center gap-3">
                <Plane size={20} />
                Flights
              </button>

              <button className="px-7 py-4 rounded-xl text-slate-800 dark:text-white font-bold flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Hotel size={20} />
                Hotels
              </button>

              <button className="px-7 py-4 rounded-xl text-slate-800 dark:text-white font-bold flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Palmtree size={20} />
                Tours
              </button>

              <button className="px-7 py-4 rounded-xl text-slate-800 dark:text-white font-bold flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Stamp size={20} />
                Visa
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.2fr_1.1fr_1.1fr_1fr_1.2fr] gap-0">
              <div className="border border-slate-200 dark:border-slate-700 rounded-l-2xl p-4">
                <p className="text-sm text-slate-500">From</p>
                <h4 className="mt-2 font-bold text-slate-900 dark:text-white">
                  Kabul (KBL)
                </h4>
              </div>

              <div className="relative border-y border-r border-slate-200 dark:border-slate-700 p-4">
                <span className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 items-center justify-center text-[#000080]">
                  <Repeat2 size={20} />
                </span>
                <p className="text-sm text-slate-500">To</p>
                <h4 className="mt-2 font-bold text-slate-900 dark:text-white">
                  Dubai (DXB)
                </h4>
              </div>

              <div className="border-y border-r border-slate-200 dark:border-slate-700 p-4">
                <p className="text-sm text-slate-500">Departure</p>
                <h4 className="mt-2 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CalendarDays size={17} />
                  20 May, 2026
                </h4>
              </div>

              <div className="border-y border-r border-slate-200 dark:border-slate-700 p-4">
                <p className="text-sm text-slate-500">Return</p>
                <h4 className="mt-2 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CalendarDays size={17} />
                  27 May, 2026
                </h4>
              </div>

              <div className="border-y border-r border-slate-200 dark:border-slate-700 rounded-r-2xl p-4">
                <p className="text-sm text-slate-500">Travelers</p>
                <h4 className="mt-2 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Users size={17} />1 Traveler
                </h4>
              </div>

              <button className="lg:ml-5 mt-4 lg:mt-0 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black flex items-center justify-center gap-3 py-5 transition">
                <Search size={23} />
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item) => (
            <div key={item.title} className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl border border-[#000080]/20 flex items-center justify-center text-[#000080] dark:text-orange-400">
                <item.icon size={30} />
              </div>

              <div>
                <h3 className="font-black text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .hero-swiper .swiper-pagination {
            bottom: 155px !important;
            text-align: left;
            padding-left: calc((100vw - 1280px) / 2 + 24px);
          }

          .hero-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: white;
            opacity: 0.6;
          }

          .hero-swiper .swiper-pagination-bullet-active {
            width: 34px;
            border-radius: 999px;
            background: #f97316;
            opacity: 1;
          }

          @media (max-width: 1280px) {
            .hero-swiper .swiper-pagination {
              padding-left: 24px;
            }
          }

          @media (max-width: 1024px) {
            .hero-swiper .swiper-pagination {
              bottom: 210px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default HeroSlider;