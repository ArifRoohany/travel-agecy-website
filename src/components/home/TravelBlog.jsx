import { useEffect, useRef } from "react";
import {
  ArrowRight,
  CalendarDays,
  User,
  Tag,
  BookOpen,
  Clock,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TravelBlog() {
  const sectionRef = useRef(null);

  const posts = [
    {
      title: "Top 5 Travel Destinations From Afghanistan",
      category: "Travel Guide",
      date: "20 May, 2026",
      author: "Admin",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90",
      text: "Discover beautiful and affordable destinations for families, students and business travelers.",
    },
    {
      title: "How To Prepare Your Documents For Visa",
      category: "Visa Tips",
      date: "18 May, 2026",
      author: "Travel Expert",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=90",
      text: "Learn the important documents and steps you need before applying for your travel visa.",
    },
    {
      title: "Why Booking With A Travel Agency Is Better",
      category: "Travel Advice",
      date: "15 May, 2026",
      author: "AfghanTravel",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=90",
      text: "A trusted travel agency saves your time, reduces stress and helps you travel with confidence.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-heading",
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

      gsap.utils.toArray(".blog-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
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
        <div className="blog-heading flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
              <BookOpen size={17} />
              TRAVEL BLOG
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              Latest Travel Tips & News
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl leading-7">
              Read helpful travel guides, visa tips and destination ideas to
              plan your next journey with confidence.
            </p>
          </div>

          <button className="w-fit px-7 py-4 rounded-full bg-[#000080] text-white font-bold flex items-center gap-3 hover:bg-orange-500 transition">
            View All Articles
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="blog-card group bg-white dark:bg-slate-900 rounded-[34px] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition duration-500"
            >
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/80 via-black/15 to-transparent" />

                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-orange-500 text-white font-black flex items-center gap-2">
                  <Tag size={16} />
                  {post.category}
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 text-white/90 text-sm font-semibold">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-semibold">
                  <User size={17} className="text-orange-500" />
                  By {post.author}
                </div>

                <h3 className="mt-4 text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#000080] dark:group-hover:text-orange-400 transition leading-tight">
                  {post.title}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
                  {post.text}
                </p>

                <button className="mt-7 flex items-center gap-3 text-[#000080] dark:text-orange-400 font-black group-hover:text-orange-500 transition">
                  Read More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelBlog;