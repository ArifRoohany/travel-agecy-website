import { ArrowRight, MapPin, Star, CalendarDays, Users } from "lucide-react";

function PopularDestinations() {
  const destinations = [
    {
      name: "Band-e-Amir",
      location: "Bamyan, Afghanistan",
      price: "$120",
      days: "3 Days",
      people: "2-8 People",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Dubai City",
      location: "United Arab Emirates",
      price: "$450",
      days: "5 Days",
      people: "2-10 People",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Istanbul",
      location: "Turkey",
      price: "$390",
      days: "6 Days",
      people: "2-12 People",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=90",
    },
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#000080]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black text-sm">
              POPULAR DESTINATIONS
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              Explore Top Destinations
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl leading-7">
              Choose from our most loved travel destinations with trusted
              services, comfortable planning, and affordable tour packages.
            </p>
          </div>

          <button className="w-fit px-7 py-4 rounded-full bg-[#000080] text-white font-bold flex items-center gap-3 hover:bg-orange-500 transition">
            View All Destinations
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destinations.map((item) => (
            <div
              key={item.name}
              className="group rounded-[32px] bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transition duration-500"
            >
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/90 via-black/20 to-transparent" />

                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-[#000080] font-black">
                  From {item.price}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="flex items-center gap-2 text-white/85">
                    <MapPin size={18} className="text-orange-400" />
                    {item.location}
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex text-orange-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <span className="font-bold text-slate-600 dark:text-slate-400">
                    4.9 Rating
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 flex items-center gap-3">
                    <CalendarDays size={20} className="text-[#000080] dark:text-orange-400" />
                    <span className="font-bold text-slate-700 dark:text-slate-200">
                      {item.days}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4 flex items-center gap-3">
                    <Users size={20} className="text-[#000080] dark:text-orange-400" />
                    <span className="font-bold text-slate-700 dark:text-slate-200">
                      {item.people}
                    </span>
                  </div>
                </div>

                <button className="mt-6 w-full py-4 rounded-2xl bg-[#000080] text-white font-black flex items-center justify-center gap-3 hover:bg-orange-500 transition">
                  Explore Destination
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;