import { Link } from "react-router-dom";
import { useState } from "react";
import { workspaces } from "../data";

export default function Home() {
  const [search, setSearch] = useState("");

  // Filter workspaces based on search term
  const filteredWorkspaces = workspaces.filter(
    (ws) =>
      ws.name.toLowerCase().includes(search.toLowerCase()) ||
      ws.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Workspaces
      </h1>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 🏢 Workspace Grid */}
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
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{workspace.name}</h2>
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
    </div>
  );
}
