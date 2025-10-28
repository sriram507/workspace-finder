import { Link } from "react-router-dom";
import { useState } from "react";
import { workspaces } from "../data";
import bannerImage from "../assets/images/Banner.jpeg";
import MapView from "../components/MapView"; // 🗺️ Import the new map component

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredWorkspaces = workspaces.filter(
    (ws) =>
      ws.name.toLowerCase().includes(search.toLowerCase()) ||
      ws.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* 🏞️ Full-Screen Banner */}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Banner content */}
        <div className="relative z-10 px-4 max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
            Find Your Perfect Workspace in Hyderabad
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            Discover top coworking spaces and book instantly.
          </p>

          {/* 🔍 Search Bar */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-80 sm:w-96 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* 🏢 Workspace Grid */}
      <section className="p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Available Workspaces
        </h2>

        {filteredWorkspaces.length === 0 ? (
          <p className="text-center text-gray-500">No workspaces found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkspaces.map((workspace) => (
              <div
                key={workspace.id}
                className="border rounded-2xl shadow hover:shadow-lg transition bg-white overflow-hidden"
              >
                <img
                  src={workspace.image}
                  alt={workspace.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">
                    {workspace.name}
                  </h3>
                  <p className="text-gray-600 mb-1">{workspace.location}</p>
                  <p className="font-bold text-blue-600 mb-3">
                    ₹{workspace.price}/hour
                  </p>
                  <Link
                    to={`/workspace/${workspace.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 🗺️ Hyderabad Map */}
      <section className="px-6 pb-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Hyderabad Workspaces Map
        </h2>
        <MapView />
      </section>
    </div>
  );
}
