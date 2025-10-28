import { Link } from "react-router-dom";
import { workspaces } from "../data";

export default function Workspaces() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Workspaces in Hyderabad
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Total Workspaces Available: <span className="font-semibold text-blue-600">{workspaces.length}</span>
      </p>

      {workspaces.length === 0 ? (
        <p className="text-center text-gray-500">No workspaces available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace) => (
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
                <h3 className="text-xl font-semibold mb-1 text-gray-800">
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
    </div>
  );
}
