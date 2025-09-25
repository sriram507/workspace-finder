import { Link } from "react-router-dom";

export default function WorkspaceCard({ workspace }) {
  return (
    <Link
      to={`/workspace/${workspace.id}`}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col h-full"
    >
      {/* Image container */}
      <div className="h-64 w-full overflow-hidden rounded-t-2xl flex-shrink-0">
        {workspace.image ? (
          <img
            src={workspace.image}
            alt={workspace.name}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{workspace.name}</h2>
          <p className="text-gray-500 mb-2">{workspace.location}</p>
        </div>
        <p className="font-bold text-blue-600 mt-2">${workspace.price}/hour</p>
      </div>
    </Link>
  );
}
