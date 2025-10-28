import { Link } from "react-router-dom";
import { useState } from "react";
import { workspaces } from "../data";
import bannerImage from "../assets/images/Banner.jpeg";
import aboutImage from "../assets/images/aboutus.jpg";
import MapView from "../components/MapView";

export default function Home() {
  const [search, setSearch] = useState("");

  // Show only 9 featured cards
  const featuredWorkspaces = workspaces.slice(0, 9);

  const filteredWorkspaces = featuredWorkspaces.filter(
    (ws) =>
      ws.name.toLowerCase().includes(search.toLowerCase()) ||
      ws.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full text-gray-900">
      {/* 🌆 Banner Section */}
      <section
        className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
            Find Your <span className="text-blue-400">Perfect Workspace</span> in Hyderabad
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10">
            Explore modern coworking and virtual offices designed for your growth.
          </p>

          <div className="flex justify-center">
            <div className="backdrop-blur-lg bg-white/20 rounded-full p-2 shadow-lg w-80 sm:w-96 flex items-center">
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

        <div className="absolute bottom-6 text-white text-sm animate-bounce opacity-70">
          ↓ Explore More
        </div>
      </section>

      {/* 💼 About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <img
              src={aboutImage}
              alt="About Workspace Finder"
              className="rounded-3xl shadow-2xl w-full object-cover h-96 transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
              Empowering Professionals with{" "}
              <span className="text-blue-600">Smarter Workspaces</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Workspace Finder connects you with Hyderabad’s most inspiring coworking
              and virtual office spaces. Whether you're a solo creator or scaling team,
              discover your next productive environment — all in one place.
            </p>
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 🏢 Featured Workspaces */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Coworking & Virtual Offices
          </h2>
          <p className="text-gray-500 mb-10">
            Explore our handpicked selection of modern, flexible workspaces.
          </p>

          {filteredWorkspaces.length === 0 ? (
            <p className="text-center text-gray-500">No workspaces found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorkspaces.map((workspace) => (
                <div
                  key={workspace.id}
                  className="bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={workspace.image}
                      alt={workspace.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition"></div>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold mb-1">
                      {workspace.name}
                    </h3>
                    <p className="text-gray-500 mb-2">{workspace.location}</p>
                    <p className="text-blue-600 font-semibold text-lg mb-4">
                      ₹{workspace.price}/hour
                    </p>
                    <Link
                      to={`/workspace/${workspace.id}`}
                      className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 🔘 More Workspaces Button */}
          <div className="mt-12">
            <Link
              to="/workspaces"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-600 shadow-lg transition-all transform hover:-translate-y-1"
            >
              More Workspaces →
            </Link>
          </div>
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Hyderabad Workspaces Map
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <MapView />
        </div>
      </section>
    </div>
  );
}
