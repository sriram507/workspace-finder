import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { workspaces } from "../data";
import bannerImage from "../assets/images/Banner.jpeg";
import aboutImage from "../assets/images/aboutus.jpg";
import MapView from "../components/MapView";

export default function Home() {
  const [search, setSearch] = useState("");

  const featuredWorkspaces = workspaces.slice(0, 9);
  const filteredWorkspaces = useMemo(
    () =>
      featuredWorkspaces.filter(
        (ws) =>
          ws.name.toLowerCase().includes(search.toLowerCase()) ||
          ws.location.toLowerCase().includes(search.toLowerCase())
      ),
    [featuredWorkspaces, search]
  );

  return (
    <div className="w-full text-[#064E3B] bg-[#F0FDF4]">
     {/* 🌆 Hero / Banner */}
<section
  className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bannerImage})` }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

  <div className="relative z-10 px-6 max-w-3xl">
    <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
      Find Your{" "}
      <span className="text-[#22C55E]">Perfect Workspace</span> in Hyderabad
    </h1>
    <p className="text-lg sm:text-xl text-gray-200 mb-10">
      Discover inspiring coworking & virtual offices designed for productivity.
    </p>

    <div className="flex justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-full p-2 shadow-lg w-80 sm:w-96 flex items-center border border-white/20">
        <input
          type="text"
          placeholder="🔍 Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow bg-transparent text-white placeholder-gray-300 outline-none px-4 py-2"
        />
      </div>
    </div>
  </div>

  <div className="absolute bottom-6 text-[#22C55E] text-sm animate-bounce opacity-80">
    ↓ Explore More
  </div>
</section>


      {/* ⚙️ How It Works */}
      <section className="py-20 bg-gradient-to-br from-white to-[#DCFCE7] text-center">
        <h2 className="text-4xl font-bold text-[#15803D] mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: "🔍",
              title: "Search",
              desc: "Browse verified coworking and virtual offices across Hyderabad.",
            },
            {
              icon: "⚖️",
              title: "Compare",
              desc: "Compare amenities, pricing, and features effortlessly.",
            },
            {
              icon: "📅",
              title: "Book",
              desc: "Reserve instantly and receive confirmation in seconds.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-100 p-8 transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 text-[#22C55E]">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-[#064E3B]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💼 About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <img
              src={aboutImage}
              alt="About Workspace Finder"
              className="rounded-3xl shadow-xl w-full object-cover h-96 transform group-hover:scale-105 transition duration-700"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#064E3B] leading-snug">
              Empowering Professionals with{" "}
              <span className="text-[#15803D]">Smarter Workspaces</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Workspace Finder connects you with Hyderabad’s most inspiring coworking
              and virtual offices. Whether you're a freelancer or a growing team,
              find the perfect place to focus and collaborate.
            </p>
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-[#15803D] to-[#22C55E] text-white px-8 py-3 rounded-full font-medium text-lg hover:shadow-lg hover:from-[#16A34A] hover:to-[#15803D] transition transform hover:-translate-y-1"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 🏢 Featured Workspaces */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#15803D]">
            Featured Workspaces
          </h2>
          <p className="text-gray-500 mb-10">
            Explore our curated list of flexible coworking and virtual offices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkspaces.map((workspace) => (
              <div
                key={workspace.id}
                className="bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <img
                  src={workspace.image}
                  alt={workspace.name}
                  className="w-full h-56 object-cover rounded-t-3xl"
                  loading="lazy"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-1 text-[#064E3B]">
                    {workspace.name}
                  </h3>
                  <p className="text-gray-500 mb-2">{workspace.location}</p>
                  <p className="text-[#15803D] font-semibold text-lg mb-4">
                    ₹{workspace.price}/hour
                  </p>
                  <Link
                    to={`/workspace/${workspace.id}`}
                    className="inline-block bg-[#15803D] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#16A34A] transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/workspaces"
              className="inline-flex items-center bg-gradient-to-r from-[#15803D] to-[#22C55E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-[#16A34A] hover:to-[#15803D] shadow-lg transition transform hover:-translate-y-1"
            >
              More Workspaces →
            </Link>
          </div>
        </div>
      </section>

      {/* 💡 Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-white to-[#DCFCE7] text-center">
        <h2 className="text-4xl font-bold text-[#15803D] mb-12">
          Why Choose Workspace Finder?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {[
            { title: "Verified Spaces", desc: "Every workspace is checked for quality and safety." },
            { title: "Affordable Plans", desc: "Flexible options for startups and freelancers." },
            { title: "Instant Booking", desc: "Book and confirm instantly without delays." },
            { title: "24/7 Support", desc: "We’re always here to assist you anytime." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-[#15803D] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#15803D] mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aarav Kumar",
                role: "Startup Founder",
                quote:
                  "Workspace Finder made it easy to find a modern office space for our growing team!",
              },
              {
                name: "Megha Reddy",
                role: "Freelancer",
                quote:
                  "I love the flexibility — I can book a desk anytime with no hassle.",
              },
              {
                name: "Rahul Sharma",
                role: "Remote Developer",
                quote:
                  "Best coworking booking app in Hyderabad! Clean interface and great support.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <p className="italic text-gray-600 mb-6">“{t.quote}”</p>
                <h4 className="text-lg font-semibold text-[#15803D]">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#15803D] mb-8">
          Hyderabad Workspaces Map
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <MapView />
        </div>
      </section>
    </div>
  );
}
